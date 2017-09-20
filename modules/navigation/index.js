import Link from 'next/link'

export default () => (
  <div>
    <Link prefetch href="/knowledge-vault">
      <a>KV</a>
    </Link>
    <Link prefetch href="/business-vault">
      <a>BV</a>
    </Link>
  </div>
)
