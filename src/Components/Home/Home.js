import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import ProductsectionOne from '../ProductSectionOne/ProductsectionOne';
import SliderSection from '../SliderSection/SliderSection';
import './Home.css';

const Home = () => {
    
    return (
        <div className="container-fluid">
            {/* <div className="header-title-section "  >
              <strong className="background-span">   <span className="text-danger ">Resturent</span> Website </strong>
            </div> */}
            <div className="row g-5">
            <SliderSection></SliderSection>
            <BannerSection></BannerSection>
            </div>
            <hr/>
            <ProductsectionOne></ProductsectionOne>
            </div>
        
    );
};

export default Home;