import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import ProductsectionOne from './ProductSectionOne/ProductsectionOne';
import SliderSection from './SliderSection/SliderSection';
import './Home.css';
import BestSallers from './BestSallers/BestSallers';
import ProductTabs from './ProductTabs/ProductTabs';
import Hotsales from './HotSales/Hotsales';
import LimitedTimeTab from './LimitedTimeTab/LimitedTimeTab';

const Home = () => {
    
    return (
        <div className="container-fluid">
            
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
            <div className="d-md-flex d-block">
            <BestSallers></BestSallers>
            <ProductTabs></ProductTabs>
            </div>

            <div className="d-md-flex d-block">
              <Hotsales></Hotsales>
              <LimitedTimeTab></LimitedTimeTab>

            </div>
            
            </div>
            </div>
        
    );
};

export default Home;