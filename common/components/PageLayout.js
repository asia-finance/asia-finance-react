import Head from 'next/head'
import PropTypes from 'prop-types'
import Navigation from 'modules/navigation'

const PageLayout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navigation />
    </header>

    {children}

    <footer>{'I`m here to stay'}</footer>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string
}

PageLayout.defaultProps = {
  title: 'This is the default title'
}

export default PageLayout
