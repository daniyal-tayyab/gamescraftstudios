import React from 'react';

import "./product-card.css";

const ProductCard = ({service}) => {
    const {title, desc, video, icon} = service;
  return (
    <div className="card">
    <div className="card-img">
    <video
        src={video}
        loop="loop"
        autoPlay="autoplay"
        playsInline
        muted="muted"
        preload="auto"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
    ></video>
    </div>
    <div className="card-info">
      <img className='card-icon' src={icon} alt={title}/>
      <p className="text-title">{title} </p>
      <p className="text-body">{desc}</p>
    </div>
  </div>
  )
}

export default ProductCard
