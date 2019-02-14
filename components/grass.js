import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.numColumns}, 1fr);
  background-color: #2196F3;
  justify-items: center;
  align-items: center;
`

const Grass = (props) => {
  let numColumns = props.numColumns
  let ind = 0
  let playerColumn = [...Array(numColumns).keys()].map(item => {
    return (
      <div key={item + 1}>{item + 1}</div>
    )
  })
  return (
    <div>
      <Content numColumns={numColumns}>
        {playerColumn}
      </Content>
    </div>
  )
}

export default Grass