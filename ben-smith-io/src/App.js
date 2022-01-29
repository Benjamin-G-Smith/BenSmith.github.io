
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import AboutComponent from './components/AboutComponent/AboutComponent';

function App() {
  return (

    <div className="App">
      <header>
      <Navbar fixed="top" expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">
            <h1 className="h4">
              <div className="d-flex align-items-center text-dark text-decoration-none">
                <p className="App-Wave-Icon" >&#128075;</p>
                <h2 className="h2">Hi! I am Benjamin Smith</h2>
              </div>
            </h1>
          </Navbar.Brand>
          <Navbar.Collapse className="responsive-navbar-nav justify-content-end">
            <Nav>
              <Nav.Link href="">LinkedIn</Nav.Link>
              <Nav.Link href="">GitHub</Nav.Link>
              <Nav.Link href="">Twitter</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
      <div className="App-body">
        <Container className="text-body">
          <Row>
            <AboutComponent>

            </AboutComponent>
          </Row>
          <hr className="Line-Divider" />
        </Container>
        <Container className="text-body">

          <Row>
              <p>Here is a description</p>
              <Col>
              <Card >
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              </Col>

          </Row>
      </Container>
      </div>
      

    </div>
  );
}

export default App;
