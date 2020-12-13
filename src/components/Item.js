import React from 'react'

export default function Item({ Item }) {
    const showItem = () => {
        console.log("preesss")
    }
    return (
        <div className="card">
            <button className="cart-add" type="button" onClick={showItem}>
                <i className="fa fa-cart-plus"></i>
            </button>
            <div className="card-title">
                <img src={Item.image} alt={Item.name} />
                <h2>{Item.name}</h2>
            </div>
            <div className="card-body">
                <span className="price">${Item.price}</span>
                <div className="raiting">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <button className="btn btn-show" type="button" onClick={showItem}>Show More</button>
            </div>

        </div>
    )
}
