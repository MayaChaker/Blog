import React from 'react';
import Cdata from './Cdata';
import "./Card.css";

const Card = () =>{
    return (
        <>
            <section className='card-section top'>
                <div className="section-head">
                  <div className="titles">
                    <span className="kicker">Latest</span>
                    <h2>The Journal</h2>
                    <p className="sub">Short reads on travel, style, interiors, and modern rituals.</p>
                  </div>
                </div>
                <div className='card grid'> 
                    {Cdata.map((value) =>{
                        return(
                        <div className='box'  key={value.id}>
                           <div className='img'>
                              <img src={value.cover} alt=''/>
                        </div>
                        <span>{value.category}</span>
                        <h2>{value.title}</h2>
                        <p className='excerpt'>{value.excerpt}</p>
                        <p className='meta'>{value.author} · {value.date} · {value.readTime}</p>

                    </div>
                    
                    )
                    })}
                </div>
            </section>
            </>
    )
}
export default Card
