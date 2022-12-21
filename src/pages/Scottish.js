import React from "react";
import { CardImg, Card, Container, Col, Row } from "react-bootstrap";

function Scottish() {
    return (
        <div>
            <Container style={{ padding: 20, marginTop: 20 }}>
                <br />
                <h1 style={{ textAlign: 'center' }}>Scottish Fold</h1>
                <br />
                <Row>
                    <Col>

                        <Card >

                            <CardImg variant="top" src="https://w0.peakpx.com/wallpaper/221/442/HD-wallpaper-scottish-fold-bokeh-cat-with-blue-eyes-domestic-cat-pets-gray-cat-cute-animals-cats-lazy-cat.jpg" />


                        </Card>
                        <br />
                       
                    {/* <Col> */}
                        <Card>

                            <CardImg src="https://www.mcleanvet.com/wp-content/uploads/sites/227/2022/03/scottish-fold-cat-500px.jpg" />

                        </Card>
                        {/* </Col> */}
                     
                   
                    </Col>

                    <Col>
                        <Card>

                            <CardImg src="https://besthqwallpapers.com/Uploads/21-5-2019/93095/thumb2-4k-scottish-fold-cat-with-blue-eyes-domestic-cat-pets.jpg" />

                        </Card>
                        <br />
                        <Card>

                            <CardImg src="https://catlinescattery.com/images/females/luna/luna-4.jpg" />

                        </Card>

                    </Col>
                    

                </Row>
                
            </Container>
        </div>
    );
}

export default Scottish;