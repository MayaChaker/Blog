import React from 'react'
import Sdata from '../Slide/Sdata'
import "../Slide/style.css"

const CardTwo = () =>{
    return(
        <>
    <div className=" CardTwo top slide">
        <h2>Single Item</h2>
        <Slider {...settings}>
            {Sdata.map((value) =>{
                return(
                    <div className="box">
                        <div className="img img2">
                            <img src={value.cover} alt='' />
                        </div>
                        <div className="text">
                            <span>{value.category}</span>
                            <span>{value.title}</span>
                            <p>{value.desc}</p>
                        </div>
                    </div>
                )
            })}

        </Slider>
    </div>
        </>
    )
}
export default CardTwo