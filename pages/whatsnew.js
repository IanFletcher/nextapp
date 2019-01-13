import Navbar from '../components/navbar'

export default () => {
  let x = 'whats new now?'
  return (
    <div>
      <Navbar />
      <p> Whats new </p>
      <p> {x}</p>
    </div>
    )
  }
