import { gql, graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import style from 'styles/articles'

const Articles = ({ data }) => (
  <div>
    {style()}
    {data.articles.edges.map(article => (
      <div key={article.node.id}>{article.node.title}</div>
    ))}
  </div>
)

Articles.propTypes = {
  data: PropTypes.shape({
    articles: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
}

export default graphql(gql`
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
`)(Articles)
