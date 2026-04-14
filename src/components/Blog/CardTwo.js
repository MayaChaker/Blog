import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickSlider from "react-slick";
import SpotlightData from "./SpotlightData";
import "../Slide/style.css"

const CardTwo = () =>{
    const settings = {
        dots: true,
        dotsClass: "slick-dots spot-dots",
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3600,
        pauseOnHover: true,
        pauseOnFocus: true,
        fade: true,
        cssEase: "cubic-bezier(0.22, 0.61, 0.36, 1)",
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
        <>
    <div className="CardTwo top slide spotlight-section">
        <div className="section-head">
          <div className="titles">
            <span className="kicker">Spotlight</span>
            <h2>Spotlight Notes</h2>
            <p className="sub">A tighter edit, a softer motion, a cleaner card layout.</p>
          </div>
        </div>
        <SlickSlider {...settings}>
            {SpotlightData.map((value) =>{
                return(
                    <div className="box" key={value.id}>
                        <div className="img img2">
                            <img src={value.cover} alt='' />
                        </div>
                        <div className="text">
                            <span>{value.category}</span>
                            <span>{value.title}</span>
                            <p>{value.desc}</p>
                            <p className="meta">{value.author} · {value.date} · {value.readTime}</p>
                        </div>
                    </div>
                )
            })}

        </SlickSlider>
    </div>
        </>
    )
}
export default CardTwo
