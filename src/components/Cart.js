import React from 'react'
import { useGlobalContext } from '../context'
import './Cart.css'
import Header from './Header'
import { items } from '../data'
import CartProduct from './CartProduct'

function Cart() {
    const [state, dispatch] = useGlobalContext()
    return (
        <div className="cart">
            <Header />
            <div className="cart__center">
               <span style={{
                   fontSize: "2.5rem",
                   letterSpacing: "2px"
               }}>Shopping Cart</span>
               <div className="cart_">
                <div className="cart__items">
                    {
                        state.basket.map(item => {
                            
                            return <CartProduct key={item.id} {...item}/>
                        })
                    }
                </div>

               <div className="cart__total">
                     <p>Total: {state.total_cost}</p>
                </div> 
            </div>
            </div>

        </div>
    )
}

export default Cart
