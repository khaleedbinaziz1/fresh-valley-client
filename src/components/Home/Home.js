import React, { useEffect, useState } from 'react'
import Event from '../Event/Event';
import './Home.css'

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://tranquil-journey-74991.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <section className="">
            <div className="d-flex justify-content-center text-center">
                <div className="w-75 row ">
                    {
                        events.map(event => <Event event={event}></Event>)
                    }
                </div>
            </div>

        </section>


    );
}

export default Home
