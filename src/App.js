
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
      <Navbar  expand="lg" variant="light" bg="light">
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
              <Nav.Link href="">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
      <div className="App-body">
        <Container className="text-muted">
          <Row >
            <AboutComponent>
            </AboutComponent>
          </Row>
        </Container>
        <Container className="text-muted">

          <Row>
          <hr className="Line-Divider" />
            <Col>
              <Card className="card-style" style={{ cursor: "pointer" }}>
                <Card.Body >
                  <Card.Text>
                    Professional Experience
                  </Card.Text>
                </Card.Body>                
              </Card>              
            </Col>
            <Col>
            <Card className="card-style" style={{ cursor: "pointer" }}>
                <Card.Body >
                  <Card.Text>
                    Projects
                  </Card.Text>
                </Card.Body>                
              </Card>
            </Col>
          </Row>
          <Row>
          <hr className="Line-Divider" />
            <Col>
            <Card className="card-style" style={{ cursor: "pointer" }}>
                <Card.Body >
                  <Card.Text>
                    Interests
                  </Card.Text>
                </Card.Body>                
              </Card>
            </Col>
            <Col>
            <Card className="card-style" style={{ cursor: "pointer" }}>
                <Card.Body >
                  <Card.Text>
                    Blog Posts
                  </Card.Text>
                </Card.Body>                
              </Card>
            </Col>
          </Row>
      </Container>
      </div>
      
    <footer className="text-muted footer-style">
        <Navbar variant="light" className="justify-content-center">
          <Nav className="justify-content-center">
            <Nav.Link href="">LinkedIn</Nav.Link>
            <Nav.Link href="">GitHub</Nav.Link>
            <Nav.Link href="">Twitter</Nav.Link>
            <Nav.Link href="">Resume</Nav.Link>
          </Nav>
        </Navbar>
    </footer>
    </div>
  );
}

export default App;
