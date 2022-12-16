import logo from './assets/img/Angel.jpg';
import './App.css';
import { Button, Card, Row, Col, Container, Navbar, Nav, Jumbotron } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
function App() {
  return (
    <div>
      <Navbar className='justify-centent-between' bg='light' expanded='lg'>
        <Navbar.Brand href='/'>
          MONEY
        </Navbar.Brand>
        <div style={{ display: 'flex'}}>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/https://www.youtube.com/watch?v=kpfisl0VFm4' target='_blank'>Let's go</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Container style={{ padding: 20, marginTop: 20}}>
        <br />
          <h1 style={{textAlign: 'center'}}>Need money for cats</h1>
        <br />
        <Row>
          <Col md={4}>
            <Card style={{ padding: 20, backgroundColor: '#3A3C4B'}}>
              <Card.Body>
                <Card.Img variant='top' src={logo}/>
                <Card.Title style={{color: '#fff'}}>Angel</Card.Title>
                <Card.Text style={{color: '#fff'}}>Fat Cat</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
