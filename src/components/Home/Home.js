import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Event from '../Event/Event';
import './Home.css'

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <Container>
            <Row>
                <Col md={4}>{
                    events.map(event => <Event event={event}></Event>)
                }</Col>
            </Row>

        </Container>
        
    );
}

export default Home
