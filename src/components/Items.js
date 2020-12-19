import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from './Item'

export default function Items() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    
    useEffect(() => {
        fetch("http://localhost:3232/")
        .then(response => response.json())
        .then(data => {
            dispatch({ type: "ADD_ITEM_LIST", payload: data.products })
        });
        

    }, [dispatch])
    return (
        <div className="list-items">
            {products.length > 0 &&
                products.map(product => <Item key={product._id} Item={product}></Item>)
            }

        </div>
    )
}
