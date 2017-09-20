import withData from 'store/withData'
import AFLayout from 'common/components/PageLayout'
import Articles from 'knowledge_vault/components/Articles'

export default withData(() => (
  <AFLayout>
    <Articles />
  </AFLayout>
))
