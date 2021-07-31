import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProducts.css'
import grid from '../../icons/grid1.png';
import plus from '../../icons/plus1.png';

const AddProducts = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageURL: imageURL,
            weight: data.weight,
            price: data.price
        };
        const url = `https://tranquil-journey-74991.herokuapp.com/addEvent`

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server site response'))

    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '709857af4158efc43859168f6daa2479');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={3}>
                        <div className="left-section text-danger" >

                            <Link className="n-link" to="/addProducts"><img src={plus} alt="" /> Add Products</Link>
                            <br />
                            <Link className="n-link" to="/manageProducts">  <img src={grid} alt="" /> Manage products</Link>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue="product name" {...register("name")} />
                            <br />
                            <input defaultValue="add price" {...register("price")} />
                            <br />
                            <input defaultValue="weight" {...register("weight")} />

                            <br />
                            <input type="file" onChange={handleImageUpload} />
                            <br />
                            <input type="submit" />
                        </form></Col>
                </Row>
            </Container>



        </div>

    )
}

export default AddProducts
