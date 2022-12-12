import './App.css';
import { 
  Navbar,
  Container, 
  Nav, 
  NavDropdown , 
  Row , 
  Col, 
  Image, 
  Button,
  Card,
  CardGroup,
     
} 


from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header >
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



      </header>
      <main>
      <Container>
      <Row className='px-4 my-5'>
        <Col sm={7}>
          <Image
          src="https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg"
          fluid
          rounded
          className=""
          />
          
        </Col>
        <Col sm={5}>
          <h1 class="font-wiegh-light">Tagline</h1>
          <p>Shadow of the Tomb Raider is a 2018 action-adventure video game, and a sequel to the 2015 game Rise of the Tomb Raider, developed by Eidos-Montréal and published by Square Enix’s 
            European subsidiary. The logo seems to use Helvetica Black Extended and a grungy version of Gotham Ultra.
            A freebie called Tomb Raider was created by Navin Adchariyavanich to emulate the distressed style in the logo.
           </p>
          <Button value="outline-primary"> Call to action</Button>
        </Col>
      </Row>
      <Row>
      <Card className="text-center bg-secordary text-black my-7 py-4">
      <Card.Body>
        This is some text within a card bodyA freebie called Tomb Raider was created by Navin Adchariyavanich to emulate the distressed style in the logo.
        </Card.Body>
    </Card>

    
    </Row>
    <Row>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </Col>
    </Row>
    </Container>

      </main>
      <footer className="py-4 my-5 bg-dark">
        <Container className="px-4">
          <p className="text-center text-white">
            Copyright &copy; Yourwebsite name 2022
          </p>

        </Container>
      </footer>
    </div>
  );
}

export default App;
