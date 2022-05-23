import logo from './logo.svg';
// import './App.css';
import Cards from './components/Cards';
import Cards0 from './metingen/nulmeting/Cards0';
import Cards1 from './metingen/eenmeting/Cards1';
import styled from 'styled-components';

function App() {
  return (
    <Container COLOR={COLOR.CLOUDY_PURPLE}>
    <div className="App">
      <header className="App-header">
      
        <Title FONTFAMILIES={FONTFAMILIES.POPPINS} FONTWEIGHTS={FONTWEIGHTS.POPPINS_02}>
        Design that solves <br></br>problems, one product at <br></br> a time
        </Title>
      
        <Cards0/>
      </header>
    </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${props => props.COLOR};
`;

const Title = styled.div`
  font-size: 48px;
  text-align: center;
  margin: 2rem;
  font-family: ${props => props.FONTFAMILIES};
  font-weight: ${props => props.FONTWEIGHTS};
`;


const COLOR = {
  LIGHT_PURPLE: "#E8E0FF",
  LAVENDER_PURPLE: "#CED0FF",
  FRESH_PURPLE: "#E4ECFF",
  LIGHT_BLUE: "#EAF5FF",
  BABY_BLUE: "#D9EDFF",
  SKY_BLUE: "#BBD2FF",
  CLOUDY_PURPLE: "#F9FAFF",
}

const FONTFAMILIES = {
  POPPINS: "Poppins",
  ARIMO: "Arimo",
}

const FONTWEIGHTS = {
  POPPINS_01: "Medium",
  POPPINS_02: "Semibold",
  ARIMO_01: "Regular",
}


export default App;
