import React from 'react'
import '../Header/Header.css'
import '../../index.css'
const Header=()=>
{
    return(
        <div className="wrapper">
            <div className="flexCenter innerWidth paddings container">
                <img src="./public/logo.png" alt="logo" style={{height:"120px",width:"300px"}}></img>

                <div className="itheads flexCenter">
                    <a href="">Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className="b1">
                    <a href="">Contact</a>
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
export default Header;