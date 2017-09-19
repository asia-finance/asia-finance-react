import React from 'react'
import cookie from 'cookie'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import initApollo from './initApollo'
import initRedux from './initRedux'

function parseCookies(ctx = {}, options = {}) {
  return cookie.parse(
    ctx.req && ctx.req.headers.cookie ? ctx.req.headers.cookie : document.cookie,
    options
  )
}

export default ComposedComponent =>
  class WithData extends React.Component {
    static displayName = `WithData(${ComposedComponent.displayName})`
    static propTypes = {
      serverState: PropTypes.object.isRequired
    }

    static async getInitialProps(context) {
      let serverState = {}

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {}
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(context)
      }

      // Run all graphql queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        if (context.res && context.res.finished) {
          // When redirecting, the response is finished.
          // No point in continuing to render
          return {}
        }

        // Setup a server-side one-time-use apollo client for initial props and
        // rendering (on server)
        const apollo = initApollo(
          {},
          {
            getToken: () => parseCookies(context).token
          }
        )
        const redux = initRedux(apollo)

        // Provide the `url` prop data in case a graphql query uses it
        const url = { query: context.query, pathname: context.pathname }

        try {
          // Run all graphql queries
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <ComposedComponent url={url} {...composedInitialProps} />
            </ApolloProvider>
          )
        } catch (error) {
          console.log(error)
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()

        // Extract query data from the Apollo's store
        const state = redux.getState()

        serverState = {
          apollo: {
            // Make sure to only include Apollo's data state
            data: state.apollo.data
          }
        }
      }

      return {
        serverState,
        ...composedInitialProps
      }
    }

    constructor(props) {
      super(props)
      // Note: Apollo should never be used on the server side beyond the initial
      // render within `getInitialProps()` above (since the entire prop tree
      // will be initialized there), meaning the below will only ever be
      // executed on the client.
      this.apollo = initApollo(this.props.serverState, {
        getToken: () => parseCookies().token
      })
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
