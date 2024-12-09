import React from 'react'
import Slide from '../Slide/Slide'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import CardTwo from './CardTwo';
import Footer from '../footer/Footer';

const BlogHome = () =>{
    const data = [
        {
            id:1,
            titleOne:"YOU CAN CHANGE THE WORLD",
            titleTwo:"STRONG STYLE",
            paraOne:"HOW WOMEN ARE REDIRECTING HOLLYWOOD",
            paraTwo:"NEW WAYS TO WEAR DENIM BELT BAGS MAKE A ",
            name:"By Jasmin Smith",
            subTitle:"How to Shop Mindfully",
            qrCode:"img/qrcode.png",
            cover:"img/blog5.jpg",
        },
    ]
    return(
        <>
           <section className='home'>
            <div className='left-content'>
                {
                    data.map((value) => {
                        return(
                            <div className='content'>
                                <div className='logo'>
                                    <h1>M</h1>
                                </div>
                                <div className='home-img'><img src={value.cover} alt=''/></div>
                                <div className='text'>
                                    <h1>{value.titleOne}</h1>
                                    <p>{value.paraOne}</p>
                                    <span>{value.name}</span>
                                </div>
                                <div className='text text2'>
                                    <h1>{value.titleTwo}</h1>
                                    <p>{value.paraTwo}</p>
                                    <span>{value.subTitle}</span>
                                </div>
                                <div className='qrcode'>
                                <img src={value.qrCode} alt=''/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='right-content'>
                <Slide />
                <Card />
                <CardTwo />
                <Footer />

                
            </div>
           </section>
        </>
    )
}

export default BlogHome