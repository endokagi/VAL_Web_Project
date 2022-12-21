import React from "react";
import { CardImg, Card, Container, Row, Col } from "react-bootstrap";

function British() {
    return (
        <div>
            <Container style={{ padding: 20, marginTop: 20 }}>
                <br />
                <h1 style={{ textAlign: 'center' }}>British</h1>
                <br />
                <Row>
                    <Col>
                        <Card>
                            <CardImg variant="top" src="https://sites.google.com/site/listofcatbreeds/_/rsrc/1552920625215/british-shorthair/brithshothaircat.jpg" />

                        </Card>
                        <br />
                        <Card.Body>
                            <Card.Title>British shorthair</Card.Title>
                            <Card.Text>
                            The British Shorthair is the pedigreed version of the traditional British domestic cat, with a distinctively stocky body, dense coat, and broad face. The most familiar colour variant is the "British Blue", 
                            with a solid grey-blue coat, orange eyes, and a medium-sized tail.
                            </Card.Text>

                        </Card.Body>
                    </Col>
                    <Col>
                        <Card>

                            <CardImg src="https://preview.redd.it/gwkjy1gkezvz.png?auto=webp&s=31963405b7f2145b9ac9330277747acac7d1424c" />

                        </Card>
                    </Col>
                    <Col>
                    <Card.Body>
                            <Card.Title>British longhair</Card.Title>
                            <Card.Text>
                            The British Longhair is a longer-haired development from the longstanding British Shorthair breed. 
                            In the mid-20th century, British Shorthairs were interbred with imported long-haired varieties, 
                            like the Turkish Angora and what today is called the Traditional Persian, 
                            with an aim to producing more stout and round-faced stock, while retaining the short coat.
                            </Card.Text>

                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default British;