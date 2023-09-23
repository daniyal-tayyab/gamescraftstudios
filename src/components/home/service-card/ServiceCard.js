import React from 'react';

import Button from "../../Button";

import unityLogo from "../../../images/services/unity.png";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {title, video, icon} = service;

    const size = title === 'Unity' ? '9rem' : '7rem';
    let styles = {width: size};

    return (
        <div class="card">
        <div class="card__side">
            <div class="card__side card__side--front"> 
                <video
                src={video}
                loop="loop"
                autoPlay="autoplay"
                playsInline
                muted="muted"
                preload="auto"
                style={{ objectFit: "cover", width: "100%", height: "calc(100% - 11rem)" }}
                ></video>
                <div className='content'>
                    <h3 className='service-name'>{title}</h3>
                    <img src={icon} alt={title} style={styles}/>
                </div>
            </div>
            <div class="card__side card__side--back">   
                <div className='content'>
                    <h3>Unity Game Developement</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                     when an unknown printer took a galley of type and scrambled it to make a type
                     specimen book.
                    </p>
                    <Button buttonType="default"><Link style={{color: "#fff"}} to="/services">View More</Link></Button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ServiceCard
