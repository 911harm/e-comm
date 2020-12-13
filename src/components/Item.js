import React from 'react'
import { Link } from 'react-router-dom'

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
                <div className="rating">
                    <span>
                        <i
                            className={
                                Item.rating >= 1
                                    ? 'fa fa-star'
                                    : Item.rating >= 0.5
                                        ? 'fa fa-star-half-o'
                                        : 'fa fa-star-o'
                            }
                        ></i>
                    </span>
                    <span>
                        <i
                            className={
                                Item.rating >= 2
                                    ? 'fa fa-star'
                                    : Item.rating >= 1.5
                                        ? 'fa fa-star-half-o'
                                        : 'fa fa-star-o'
                            }
                        ></i>
                    </span>
                    <span>
                        <i
                            className={
                                Item.rating >= 3
                                    ? 'fa fa-star'
                                    : Item.rating >= 2.5
                                        ? 'fa fa-star-half-o'
                                        : 'fa fa-star-o'
                            }
                        ></i>
                    </span>
                    <span>
                        <i
                            className={
                                Item.rating >= 4
                                    ? 'fa fa-star'
                                    : Item.rating >= 3.5
                                        ? 'fa fa-star-half-o'
                                        : 'fa fa-star-o'
                            }
                        ></i>
                    </span>
                    <span>
                        <i
                            className={
                                Item.rating >= 5
                                    ? 'fa fa-star'
                                    : Item.rating >= 4.5
                                        ? 'fa fa-star-half-o'
                                        : 'fa fa-star-o'
                            }
                        ></i>
                    </span>
                </div>
                <Link to={`item/details/${Item._id}`} className="btn btn-show">Show More</Link>
            </div>

        </div>
    )
}
