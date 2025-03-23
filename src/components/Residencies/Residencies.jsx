import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import cities from '../Residencies/Cities.json'
import '../Residencies/Residencies.css'
import { SwiperSettings } from './common.js'
import '../../index.css'
const Residencies=()=>{
    return(
        <div className="swiwrap">
            <div className="swicont flexCenter innerWidth paddings">

                <div className="switext">
                    <div className="flexStart">
                        <span className="orText">
                            Best Choices</span>
                            <span className="prText">
                                Popular Residencies
                            </span></div>
                            
                    </div>

                    <Swiper {...SwiperSettings} style={{width:'100%'}} grabCursor={true} mousewheel={true}>
                    <SliderBtns></SliderBtns>
                        {
                            cities.map((cards,i)=>
                            (
                                <SwiperSlide key={i} style={{zIndex:1}}>
                                    
                                    <div className="card flexStart">
                                        <div className="imgwrap">
                                        <img src={cards.image} alt=""></img>
                                        </div>
                                        <div>
                                            <span className="dollar orText">$ </span>
                                            <span className="rupees">{cards.price}</span>
                                        </div>
                                        <div className="tit">{cards.name}</div>
                                        <div className="desc">{cards.detail}</div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                
            </div>
        
        
        </div>
    )
}

const SliderBtns=()=>{

    const swiper=useSwiper()
    return(
        <>
        <div className="btns">
        <button className="lb" onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button className="rb" onClick={()=>(swiper.slideNext())}>&gt;</button>
        </div>
        </>
    )
}
export default Residencies;