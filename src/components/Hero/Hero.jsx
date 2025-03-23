import React from 'react'
import '../../index.css'
import '../Hero/Hero.css'
import CountUp from 'react-countup'
import {HiLocationMarker} from 'react-icons/hi'
const Hero=()=>
{
    return(
        <>
    <div className="hwrapper">
        <div className="hcon flexCenter paddings innerWidth">
        <div className="hleft flexStart">
        <div className="hlefttext">
            <div className="onaan"></div>
            <h1>Discover<br/>Most suitable<br/> property<br/></h1>
             </div>
             <div className="hdesc flexStart"><span>Find a variety of properties that suit you very easily</span>
                <span>
                    Forget all difficulties in finding a residence for you
                </span></div>

            <div className="sbox flexCenter">
                <HiLocationMarker color="var(--blue)" size={25}></HiLocationMarker>
                <input type="text"></input>
                <button className="b2">Search</button>
            </div>

            <div className="threecats flexCenter">
        <div className="stats flexStart">
        <span>
            <span><CountUp start={8800} end={9000} duration={4}>
            </CountUp></span>
            <span className="oplus">+</span>
            </span>
            <span>Premium Products</span>
       </div>

       <div className="stats flexStart">
        <span>
            <span><CountUp start={1950} end={2000} duration={4}>
            </CountUp></span>
            <span className="oplus"> +</span>
            </span>
            <span>Happy Customers</span>
       </div>

       <div className="stats flexStart">
        <span>
            <span><CountUp end={28}>
            </CountUp></span>
            <span className="oplus">+</span>
            </span>
            <span>Award Winnings</span>
       </div>
    </div>


    </div>
    <div className="hright flexCenter">
        <div className="hrightcon flexCenter">
            <img src="../../public/hero-image.png" alt=""></img>
        </div>
    </div>
    
        </div>
    </div>
    </>
    )
}
export default Hero



