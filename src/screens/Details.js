import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Details(props) {
    // const products = useSelector(state => state.products)
    const [product, setProduct] = useState([])
    const id = Number(props.match.params.id)
    useEffect(() => {
        fetch(`http://localhost:3232/${id}`)
        .then(response => response.json())
        .then(data => {
            setProduct(data)
        });
    },[id])
    return (
        <div>
            <hr/>
            <Link to="/" className="btn btn-small">Back</Link>
            <hr/>
            {product.length > 0 
                ?<div>
                    <hr/>
                    <h1>{product[0].name}</h1>
                    <h2>Price: ${product[0].price}</h2>
                    <img src={product[0].image} alt={product[0].name} />
                </div>
                :
                <div>
                    <img src={"../../images/loading.webp"} alt="loading..."/>
                    {/* <img src={"https://www.jettools.com/images/animated_spinner.gif"} alt="loading..."/> */}
                    </div>

            }
        </div>
    )
}
