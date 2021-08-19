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

       
                <div className="col-md-4 ">
                    <div style={{ width: '18rem', borderRadius: '10px', backgroundColor: '#CACDC6', padding: '10px', margin: '10px' }}>
                    <img style={{width: '180px', borderRadius: '10px'}} src={event.imageURL} />
                    <div>
                        <h4>{event.name}</h4>
                        <p>
                            {event.price} tk.
                        </p>
                        <Link to="/productDetails">
                            <Button onClick variant="contained" style={buyBtn}>Buy</Button>
                        </Link>
                    </div>
                </div>
                </div>
    );
};
export default Event;