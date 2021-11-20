import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useGlobalContext } from '../context';

function Header() {
    const [state, dispatch] = useGlobalContext()
    return (
        <div className="header fix__top">
            <div className="header__left">
                <Link to="/">
                    Shoppinng
                </Link>
            </div>

            <div className="header__mid">
               <input className='header__input'></input>
               <button className="header__search">
                 <SearchIcon className="header__searchIcon"/>
               </button>

            </div>
            <div className="header__right">
                <Link to="/" style={{
                    "fontSize":"1.3rem",
                    "color":"white",
                    "textDecoration":"none",
                    "fontWeight":"500",
                    "marginRight":"25px"
                }}>
                    Sign In
                </Link>
                <Link to="/" style={{
                    "fontSize":"1.3rem",
                    "color":"white",
                    "textDecoration":"none",
                    "fontWeight":"500",
                    "marginRight":"25px"
                }}>
                    Orders
                </Link>
                <Link to="/cart" style={{
                    "fontSize":"1.3rem",
                    "color":"white",
                    "textDecoration":"none",
                    "fontWeight":"500",
                    "marginRight":"25px"
                }}>
                    <ShoppingBasketIcon />
                    <span style={{
                        marginLeft: "10px"
                    }}>{state.total_items}</span>
                </Link>
            </div>
            {/* side components */}
        </div>
    )
}

export default Header
