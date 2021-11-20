import React from 'react'
import './CartProduct.css'


function CartProduct({id,image, price, rating, title}) {
    return (
        <div className="cartProduct">
            <div className="left">
                <img src={image}></img>
            </div>
            <div className="right">
                <p>{title}</p>
                {
                    Array.from(Array(rating).keys()).map(curr => {
                        return <span key={curr}>⭐</span>
                    })
                }
                <p>₹<span style={{
                    "fontWeight":"bold"
                }}>{price}</span></p>
                <button className="cartProduct_btn"> Remove </button>
            </div>
        </div>
    )
}

export default CartProduct
