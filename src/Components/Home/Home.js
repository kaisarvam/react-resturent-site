import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import ProductsectionOne from './ProductSectionOne/ProductsectionOne';
import SliderSection from './SliderSection/SliderSection';
import './Home.css';
import BestSallers from './BestSallers/BestSallers';

const Home = () => {
    
    return (
        <div className="container-fluid">
            {/* <div className="header-title-section "  >
              <strong className="background-span">   <span className="text-danger ">Resturent</span> Website </strong>
            </div> */}
            <div className="container-fluid">
            <div className="row g-5">
            <SliderSection></SliderSection>
            <BannerSection></BannerSection>
            </div>
            </div>
            <hr/>
            <div className="container-fluid">
            <ProductsectionOne></ProductsectionOne>
            </div>
            <div className="container-fluid">
            
            <BestSallers></BestSallers>
            </div>
            </div>
        
    );
};

export default Home;