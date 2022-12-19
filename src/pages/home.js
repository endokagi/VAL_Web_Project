import React from "react";

import img from '../assets/img/money.jpg';
import { Container, Card, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <Container style={{ padding: 20, marginTop: 20 }}>
            <h1 style={{ textAlign: 'center' }}>MONEY อ้วงๆ</h1>
            <br />

            <Row>
                <Col md={4}>
                    <Card style={{ padding: 20, backgroundColor: 'salmon' }}>
                        <Card.Body>
                            <Card.Img variant='top' src={img} />
                            <Card.Title>MONEY</Card.Title>
                            <Card.Text>อ้วงๆ</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;