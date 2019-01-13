import Navbar from '../components/navbar'
import PostLink from '../components/postLink'

const Index = () => (
  <div>
    <Navbar />
    <PostLink id='fletcher-new-url' title='Fletcher URL'>
      <p> hello world! </p>
    </PostLink>
  </div>
)

export default Index