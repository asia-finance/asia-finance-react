import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import articleQuery from 'queries/article.gql'

const Articles = ({ data }) => (
  <div>
    {data.articles.edges.map(article => <div key={article.node.title}>{article.node.title}</div>)}
    <style jsx>{`
      div {
        background-color: yellow;
      }
    `}</style>
  </div>
)

Articles.propTypes = {
  data: PropTypes.shape({
    articles: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
}

export default graphql(articleQuery)(Articles)
