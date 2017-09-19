import { gql } from 'react-apollo'

export default gql`
  query {
    articles(first: 10) {
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
