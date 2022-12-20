import React from "react";
import logo from '../assets/img/Angel.jpg';
import { Container, Row, Card } from "react-bootstrap";
function Home() {
    return(
        <div>
           <Container style={{ padding: 20, marginTop: 20 }}>
        <br />
        <h1 style={{ textAlign: 'center' }}>Need money for cats</h1>
        <br />
        <Row>
          {/* <Col md={4}> */}
            <Card style={{ padding: 20, backgroundColor: '#3A3C4B' }}>
              <Card.Body>
                <Card.Img variant='top' src={logo} />
                <Card.Title style={{ color: '#fff' }}>Angel</Card.Title>
                <Card.Text style={{ color: '#fff' }}>Fat Cat</Card.Text>
              </Card.Body>
            </Card>
          {/* </Col> */}
        </Row>
      </Container>
        </div>
    );
}

export default Home;