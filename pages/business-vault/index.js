import withData from 'store/withData'
import AFLayout from 'common/components/PageLayout'
import Deals from 'business_vault/components/Deals'

export default withData(() => (
  <AFLayout>
    <Deals />
  </AFLayout>
))
