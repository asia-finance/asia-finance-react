import { gql } from 'react-apollo'

export default gql`
  query articleQuery {
    articles(first: 5) {
      edges {
        node {
          title
          createdTime
          content
        }
      }
    }
  }
`
