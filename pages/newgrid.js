import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.numColumns}, 1fr);
  background-color: #2196F3;
`

const newgrid = (props) => {
  let numColumns = 5
  let ind = 0
  let playerColumn = [...Array(numColumns).keys()].map(item => {
    return (
      <div key={item + 1}>{item + 1}</div>
    )
  })
  return (
    <div>
      <Title>
        Here It is
      </Title>
      <Content numColumns={numColumns}>
        {playerColumn}
      </Content>
    </div>
  )
}

export default newgrid