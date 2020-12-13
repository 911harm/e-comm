import React from 'react'
import Item from './Item'
const item={
    name:"Cpu Ryzen 5",
    price:420,
    image:"./images/ryzen.svg",
    rating:4.5,
    _id:121
}
export default function Items() {
    return (
        <div className="list-items">
            <Item Item={item}></Item>
            <Item Item={item}></Item>
            <Item Item={item}></Item>
            <Item Item={item}></Item>
            <Item Item={item}></Item>
            <Item Item={item}></Item>
        </div>
    )
}
