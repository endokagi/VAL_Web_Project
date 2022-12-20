import React from "react";
import { CardImg, Card, Container } from "react-bootstrap";

function British() {
    return (
        <div>
            <Container>
            <br />
            <h1 style={{ textAlign: 'center' }}>British</h1>
            <br />
            <Card style={{ width: '18rem' }}>
                <CardImg variant="top" src="https://sites.google.com/site/listofcatbreeds/_/rsrc/1552920625215/british-shorthair/brithshothaircat.jpg"/>
             
            </Card>
            </Container>
        </div>
    );
}

export default British;