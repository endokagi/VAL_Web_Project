import img from './assets/img/logo_VestALife.png'
import './App.css';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron } from 'react-bootstrap';
function App() {
  return (
    <div>
      <Navbar className='justify-centent-between' bg='light' expanded='lg'>
        <Navbar.Brand href='/'>
          MONEY
        </Navbar.Brand>
        <div style={{ display: 'flex' }}>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/#'>Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Container style={{ padding: 20, marginTop: 20 }}>
        <br />
        <h1 style={{ textAlign: 'center' }}>MONEY อ้วงๆ</h1>
        <br />

        <row>
          <Col md={4}>
            <Card style={{ padding: 20, backgroundColor: 'salmon'}}>
              <Card.Body>
                <Card.Img variant='top' src= {img} />
                <Card.Title>MONEY</Card.Title>
                <Card.Text>อ้วงๆ</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </row>
      </Container>
    </div>
  );
}

export default App;
