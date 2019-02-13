import Navbar from '../components/navbar'
import PostLink from '../components/postLink'
import Link from 'next/link'

const Index = () => (
  <div>
    <Navbar />
    <PostLink id='fletcher-new-url' title='Fletcher URL'>
      <p> hello world! </p>
    </PostLink>
    <Link href="/newgrid"> 
      <a>grid time!</a>
    </Link>
    <Link href="/newgrid"> 
      <a>grid time!</a>
    </Link>
    <Link href="/playingfield"> 
      <a>playing field!</a>
    </Link>
  </div>
)

export default Index