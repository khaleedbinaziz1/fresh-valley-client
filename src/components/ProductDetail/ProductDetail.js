import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Event from '../Event/Event';

const ProductDetail = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch('http://localhost:5055/event/'+productId)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [productId])    
    return (
        <div>
            <h1>Your Product Details.</h1>
            
        </div>
    );
};

export default ProductDetail;