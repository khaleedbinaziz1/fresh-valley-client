import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import deleteIcon from '../../icons/delete.png';


const Admin = ({ event }) => {

    const deleteEvent = (id) => {
        console.log(id)
        fetch(`http://localhost:5055/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted successfully')
            })
    }

    return (
        <div className>
            <p>{event.name} <button onClick={() => deleteEvent(`${event._id}`)}><img src={deleteIcon} alt="" /></button> </p>
        </div>
    );
};

export default Admin;