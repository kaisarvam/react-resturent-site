import React from 'react';
import './BannerSection.css';

const BannerSection = () => {
    return (
        <div className="col-md-4  col-12 ">
            <img src="./image-icons/banners/banner3.jpg" alt="" className="img-fluid custom-img-banner-top " ></img>
            <br/>
            <img src="./image-icons/banners/banner4.jpg" alt=""  className="img-fluid custom-img-banner-bottom" ></img>
        </div>
    );
};

export default BannerSection;