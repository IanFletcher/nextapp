import styled from 'styled-components'
import Grass from '../components/grass'

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
    "ground ground ground ground aside"
    "ground ground ground ground aside"
    "ground ground ground ground aside"
    "ground ground ground ground aside"
    "ground ground ground ground aside"
    "ground ground ground ground aside"
    "footer footer footer footer footer";

  background-color: red;
`

const Header = styled.div`
  grid-area: header;
  padding: 2em;
  background: papayawhip;
`;

const Ground = styled.div`
  grid-area: ground;
  padding: 2em;
  background: blue;
  display: grid;
  gird_templace_columns: 1fr;
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
    <Field>
      <Header>xxx</Header>
      <Ground>
        <Grass numColumns={1} />
        <Grass numColumns={5} />
        <Grass numColumns={5} />
        <Grass numColumns={3} />
      </Ground>
      <Footer>foot</Footer>
      <Aside>aside</Aside>
    </Field>
  )
}

export default PlayingField