import { gql } from 'react-apollo'

export default gql`
  query dealQuery {
    deals(first: 10) {
      edges {
        node {
          dealId
          companyName
        }
      }
    }
  }
`
