import { graphql } from 'react-apollo'
import PropTypes from 'prop-types'
import dealQuery from '../queries/deal'

const Deals = ({ data }) =>
  (data.loading ? (
    <div>loading...</div>
  ) : (
    <div>
      {data.deals.edges.map(deal => <div key={deal.node.dealId}>{deal.node.companyName}</div>)}
      <style jsx>{`
        div {
          background-color: yellow;
        }
      `}</style>
    </div>
  ))

Deals.propTypes = {
  data: PropTypes.shape({
    deals: PropTypes.shape({
      edges: PropTypes.array
    }),
    loading: PropTypes.bool
  }).isRequired
}

Deals.defaultProps = {
  data: {
    deals: {
      edges: []
    },
    loading: true
  }
}

export default graphql(dealQuery)(Deals)
