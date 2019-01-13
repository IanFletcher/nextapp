const Dynamic = (props) => (
  <div>
    <p> here I am</p>
    <p>{props.url.query.title}</p>
  </div>
)

export default Dynamic