import React from 'react';
import './BestSallers.css';
import Rating from 'react-rating';
import { useContext } from 'react';
import { ProductContext } from '../../../Contexts/AllProductContext';

const BestSallers = () => {
  
  const productsAll = useContext(ProductContext);
  const bestSaller = productsAll[1];
    return (
      <div className="col-md-4 col-12 ">
        <h1 className="mt-2 pb-5 mb-4"> <strong> Best Sallers </strong> </h1>
        
        {
          bestSaller.map((product)=>{
return(
  <div className="d-flex justify-content-evenly align-items-center  m-1" key={product.id}>
          <div className="cardx bg-light p-2 m-1">
          <h4 className="text-uppercase "> <strong>{product.ProductName.slice(0,20)} </strong> </h4>
            <div className="d-flex justify-content-evenly align-items-center ">
              <div className="">
                <div className="">
                  <h5 className="text-uppercase mb-0">{product.ProductName.slice(0,20)}</h5>
                  <h5 className="main-heading mt-0">{product.category.toUpperCase()}</h5>
                  <Rating 
               readonly
            fullSymbol="fas fa-star text-warning "
            emptySymbol="far fa-star text-warning "
           initialRating={product.rating}>
               </Rating>
               <p className="fw-bold">Avarage Rationg: {product.rating}</p>
                 
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