import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from "./Sdata";
import "./style.css";

const Slide = () =>{
    const settings = {
        dots: true,
        dotsClass: "slick-dots pro-dots",
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2800,
        pauseOnHover: true,
        pauseOnFocus: true,
        centerMode: true,
        centerPadding: "70px",
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: false,
              centerPadding: "0px",
            },
          },
        ],
      };
    return(
    <>
       <div className="slide slider-section">
        <div className="section-head">
          <div className="titles">
            <span className="kicker">Featured</span>
            <h2>Featured Stories</h2>
            <p className="sub">Editor’s picks for design, travel, and modern luxury.</p>
          </div>
        </div>
        <Slider {...settings}>
            {Sdata.map((value) =>{
                return(
                    <div className="box" key={value.id}>
                        <div className="img">
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

    </Slider>
    </div>
    </>
    )

}
export default Slide
