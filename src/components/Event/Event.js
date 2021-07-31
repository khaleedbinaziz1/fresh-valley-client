import { Button, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Event.css'
const Event = ({ event }) => {
    const buyBtn = {
        backgroundColor: '#71BA58'
    }
    return (


        <Container>
            <Row>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={event.imageURL} />
                    <Card.Body>
                        <Card.Title>{event.name}</Card.Title>
                        <Card.Text>
                            {event.price} tk.
                        </Card.Text>
                        <Link to="/productDetails">
                            <Button onClick variant="contained" style={buyBtn}>Buy</Button>
                        </Link>
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container>

    );
};
export default Event;