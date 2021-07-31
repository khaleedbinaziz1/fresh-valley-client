import React, { useEffect, useState } from 'react'
import Admin from '../Admin/Admin';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageProduct.css';
import grid from '../../icons/grid1.png';
import plus from '../../icons/plus1.png';

const ManageProduct = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-journey-74991.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={3}>
                        <div className="left-section" >

                            <Link className="n-link" to="/addProducts"> <img src={plus} alt="" /> Add Products</Link>
                            <br />
                            <Link className="n-link" to="/manageProducts"> <img src={grid} alt="" /> Manage products</Link>
                        </div>
                    </Col>
                    <Col sm={9}>{
                        events.map(event => <Admin event={event}></Admin>)
                    }</Col>
                </Row>
            </Container>
        </div>
    )
}

export default ManageProduct
