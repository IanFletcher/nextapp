import React from 'react'
import styled from 'styled-components'

const Field = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas: 
    "header header header header header"
    "ground ground ground ground aside"
    "ground ground ground ground aside"
    "ground ground ground ground aside"
    "ground ground ground ground aside"
    "footer footer footer footer footer";

  background-color: red;
`

const Header = styled.div`
  grid-area: header;
  padding: 4em;
  background: papayawhip;
`;

const Ground = styled.div`
  grid-area: ground;
  padding: 4em;
  background: blue;
`;
const Footer = styled.div`
  grid-area: footer;
  padding: 4em;
  background: green;
`;

const Aside = styled.div`
  grid-area: aside;
  padding: 4em;
  background: orange;
`;


const PlayingField = (props) => {
  return (
    <div>
      <Field>
        <Header>xxx</Header>
        <Ground>ggg</Ground>
        <Footer>foot</Footer>
        <Aside>aside</Aside>
      </Field>
    </div>
  )
}

export default PlayingField