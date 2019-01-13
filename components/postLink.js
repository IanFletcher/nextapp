import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <p> {props.id}</p>
    <p> hello</p>
    <Link as={`/inspector/${props.id}`} href={`/dynamic?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default PostLink