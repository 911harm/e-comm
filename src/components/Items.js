import React from 'react'
import Item from './Item'
const item={
    name:"Cpu Ryzen 5",
    price:420,
    image:"./images/ryzen.svg"
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
