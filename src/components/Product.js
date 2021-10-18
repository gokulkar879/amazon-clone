import React from 'react'
import './Product.css'
function Product({id, image, price, rating, title, block}) {
    return (
        <div className={`product ${block===1?'one':'two'}`}>
            <div className="product__top">
                <h5 className="product__title" style={{
                    "letterSpacing":".9px",
                    "marginBottom":"3px"
                }}>{title}</h5>
                <p>₹<span style={{
                    "fontWeight":"bold"
                }}>{price}</span></p>
                {
                    Array.from(Array(rating).keys()).map(curr => {
                        return <span key={curr}>⭐</span>
                    })
                }
            </div>
                <img src={image}></img>
                <button className="product__btn"    >Add to cart</button>

        </div>
    )
}

export default Product
