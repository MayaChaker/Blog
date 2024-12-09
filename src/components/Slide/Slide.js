import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from "./Sdata";
import "./style.css";

const Slide = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arroes:false,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
    <>
       <div className="slide">
        <h2>Single Item</h2>
        <Slide {...settings}>
            {Sdata.map((value) =>{
                return(
                    <div className="box">
                        <div className="img">
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

    </Slide>
    </div>
    </>
    )

}
export default Slide