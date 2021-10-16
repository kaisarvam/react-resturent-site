import React from 'react';
import './BestSallers.css';
import { useState,useEffect } from 'react';
import useBestSallers from '../../../Hooks/useBestSallers';

const BestSallers = () => {
  const [bestSaller,setBestSaller] = useState([]);
  const newBestSales = useBestSallers();
  useEffect(()=>{
setBestSaller(newBestSales);
  },[newBestSales])
  console.log("best sallers are",bestSaller);
    return (
      <div className="col-md-4 col-12 ">
        <h1 className="mt-5"> <strong> Best Sallers </strong> </h1>
        
        {
          bestSaller.map((product)=>{
return(
  <div className="d-flex justify-content-evenly align-items-center ">
          <div className="cardx bg-light m-2 p-5">
          <h4 className="text-uppercase "> <strong>{product.ProductName.slice(0,20)} </strong> </h4>
            <div className="d-flex justify-content-evenly align-items-center ">
              <div className="">
                <div className="">
                  <h5 className="text-uppercase mb-0">{product.ProductName.slice(0,20)}</h5>
                  <h5 className="main-heading mt-0">{product.category.toUpperCase()}</h5>
                  <div className="d-flex justify-content-evenly align-items-center text-warning" >
                      <i className="fa fa-star "></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
              <div className="image"> 
                <img
                  src={product.ProductImage}
                  alt=""
                  width="130px"
                  className=" img-width"
                />
              </div>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mt-2 mb-2">
              <span>Available colors</span>
              <div className="colors">
                <span></span> <span></span> <span></span> <span></span>
              </div>
            </div>
            <div>
              <p className="mb">
               {product.BaseSpec.slice(0,80)} ...
              </p>
              <button className="btn btn-danger">Add to cart</button>
            </div>
          </div>
        </div>
);
          })
        }

      
      
        
      </div>
    );
};

export default BestSallers;