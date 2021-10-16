import React from 'react';
import './BannerSection.css';

const BannerSection = () => {
    return (
        <div className="col-md-4  col-12 ">
            <img src="https://via.placeholder.com/200x100" alt="" className="img-fluid custom-img-banner-top " ></img>
            <br/>
            <img src="https://via.placeholder.com/200x100" alt=""  className="img-fluid custom-img-banner-bottom" ></img>
        </div>
    );
};

export default BannerSection;