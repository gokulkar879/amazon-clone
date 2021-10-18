import React from 'react'
import Header from './Header'
import Product from './Product'
import './Home.css'


function Home() {
    return (
        <div className="home">
            <Header />
            <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg" style={{
                "height":"100%",
                "width":"100%"
            }}></img>
            <div className="home__product" style={{
                "marginTop":"-370px"
            }}>
                <div className="home__product__list1">
                    <Product 
                     image="https://images-na.ssl-images-amazon.com/images/I/51u2E5fNq8L._SX301_BO1,204,203,200_.jpg"
                     id={2345}
                     title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
                     price="253.65"
                     rating={4}
                     block={1}
                    >
                    </Product>
                    <Product 
                     image="https://images-na.ssl-images-amazon.com/images/I/41+eK8zBwQL._SY344_BO1,204,203,200_.jpg"
                     id={2545}
                     title="Think and Grow Rich"
                     price="126.65"
                     rating={5}
                     block={1}
                    >
                    </Product>
                </div>
                <div className="home__product__list2">
                    <Product 
                     image="https://m.media-amazon.com/images/I/71QnwIQwqAS._UL1500_.jpg"
                     id={2945}
                     title="FAUSTO Men's Monk Double Strap Wedding Shoes with TPR Welted Sole"
                     price="1226.65"
                     rating={4}
                     block={2}
                    >
                    </Product>                    
                    <Product 
                     image="https://m.media-amazon.com/images/I/713tKqCp95L._UL1500_.jpg"
                     id={25145}
                     title="Tzaro Modern Shoes"
                     price="2999"
                     rating={5}
                     block={2}
                    >
                    </Product>                   
                    <Product 
                     image="https://m.media-amazon.com/images/I/71TnFfeFDNL._UX625_.jpg"
                     id={3545}
                     title="Jaden Freeman Men's Mesh Sports Running Shoes"
                     price="499.65"
                     rating={3}
                     block={2}
                    >
                    </Product>                   
                </div>
            </div>

        </div>
    )
}

export default Home
