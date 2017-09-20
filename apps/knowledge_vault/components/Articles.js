import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import articleQuery from '../queries/article'

const Articles = ({ data }) =>
  (data.loading ? (
    <div>loading...</div>
  ) : (
    <div>
      {data.articles.edges.map(article => <div key={article.node.title}>{article.node.title}</div>)}
      <style jsx>{`
        div {
          background-color: red;
          color: white;
        }
      `}</style>
    </div>
  ))

Articles.propTypes = {
  data: PropTypes.shape({
    articles: PropTypes.shape({
      edges: PropTypes.array
    }),
    loading: PropTypes.bool
  }).isRequired
}

Articles.defaultProps = {
  data: {
    articles: {
      edges: []
    },
    loading: true
  }
}

export default graphql(articleQuery)(Articles)
