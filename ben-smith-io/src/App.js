
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (

    <div className="App">
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
            {/* <Nav>


              <Navbar.Link href="#GitHub">
                GitHub
              </Navbar.Link>
              <Navbar.Link href="#Twitter">
                Twitter
              </Navbar.Link>

            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header">
        <h1 className="h4">
          <div className="d-flex align-items-center text-dark text-decoration-none">
            <p className="App-Wave-Icon" >&#128075;</p>
            <h2 className="h2">Hi! I am Benjamin Smith</h2>
          </div>
        </h1>
        <Container className="text-body">
          <Row>
            <Col>
            <p>Here is a description</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere ac ut consequat semper viverra. Placerat in egestas erat imperdiet sed euismod nisi. Sociis natoque penatibus et magnis. Mauris a diam maecenas sed enim ut sem viverra aliquet. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Id diam vel quam elementum pulvinar etiam non quam lacus. Euismod quis viverra nibh cras. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Commodo quis imperdiet massa tincidunt nunc pulvinar. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Ultrices neque ornare aenean euismod elementum nisi quis.

Vulputate mi sit amet mauris commodo quis. Morbi tristique senectus et netus et malesuada fames. Euismod in pellentesque massa placerat duis. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Augue mauris augue neque gravida in fermentum et sollicitudin. Mus mauris vitae ultricies leo integer malesuada. Viverra vitae congue eu consequat ac. Non odio euismod lacinia at quis risus sed. Elit ut aliquam purus sit amet luctus venenatis. Etiam erat velit scelerisque in. Faucibus scelerisque eleifend donec pretium. Vestibulum lorem sed risus ultricies tristique. Felis imperdiet proin fermentum leo vel orci porta. Quam adipiscing vitae proin sagittis nisl rhoncus.

Donec adipiscing tristique risus nec. Non odio euismod lacinia at. Orci phasellus egestas tellus rutrum tellus pellentesque. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Sed viverra tellus in hac habitasse platea. Quis imperdiet massa tincidunt nunc pulvinar sapien et. Adipiscing at in tellus integer feugiat scelerisque. Velit scelerisque in dictum non consectetur a. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Integer quis auctor elit sed vulputate mi. Ornare arcu dui vivamus arcu felis. Ac feugiat sed lectus vestibulum mattis ullamcorper. Mauris a diam maecenas sed enim ut sem. Nunc lobortis mattis aliquam faucibus purus in massa. Ut sem viverra aliquet eget sit amet tellus cras. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ipsum dolor sit amet consectetur adipiscing. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Velit aliquet sagittis id consectetur purus.

Nam at lectus urna duis convallis convallis tellus id. Fames ac turpis egestas sed tempus urna. A diam maecenas sed enim ut. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Donec enim diam vulputate ut pharetra sit amet. Tortor at risus viverra adipiscing at in. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Consequat id porta nibh venenatis cras sed felis eget velit. Vulputate eu scelerisque felis imperdiet. Eget egestas purus viverra accumsan in.

Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Amet nisl purus in mollis nunc sed id semper. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Quam pellentesque nec nam aliquam sem. Nibh venenatis cras sed felis. Elit at imperdiet dui accumsan sit amet. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Non diam phasellus vestibulum lorem sed risus. Non tellus orci ac auctor augue mauris. Vitae suscipit tellus mauris a diam. Aliquet lectus proin nibh nisl. Posuere lorem ipsum dolor sit. Id volutpat lacus laoreet non curabitur. Accumsan in nisl nisi scelerisque eu ultrices. Cras semper auctor neque vitae tempus quam pellentesque nec. Enim praesent elementum facilisis leo vel fringilla est.
            </Col>
          </Row>

      </Container>
      </header>
      

    </div>
  );
}

export default App;
