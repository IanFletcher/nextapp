import Link from 'next/link'

const linkStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Navbar = () => (
  <div>
    <Link href='/'>
      <a  style={linkStyle}>Home</a>
    </Link>
    <Link href='/about'>
      <a  style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Navbar