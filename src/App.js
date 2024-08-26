import './App.css';
import './test.css'
import About from './Components/About';
import { Contact, Home } from './Components/Home';

// import Home from './Components/Home';
import Belhssane from './Components/products';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div id='main'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>Workshop</h1>
      <h2  id='ala'>Tarek</h2>
      <h3 className='gomycode'>Fedi</h3>
      {/* <Home/> */}
      <Home/>
      <Contact/>
      <Belhssane/>
      <About/>
      

    </div>
  );
}

export default App;
