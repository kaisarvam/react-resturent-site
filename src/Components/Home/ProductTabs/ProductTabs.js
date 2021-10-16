import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import useProducts from '../../../Hooks/useProducts';
import { useState ,useEffect } from 'react';
import './ProductTabs.css'

const ProductTabs = () => {
    const[products,setProducts] = useState([]);
    const All = useProducts();
 
useEffect(()=>{
    setProducts(All);
    console.log("From Product Tab",products);
},[All])

console.log("products are : ",products)
   
   
 
    return (
        <div className="col-md-8 col-12 ">
            <div className="m-5 p-4">
            <Tabs defaultActiveKey="Monitors" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Laptops" title="Laptops">
  <div className="row">
    {products.map((product)=>{
      if(product.category === "laptop"){
        return (
          <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center">
          <div className="card shadow-lg w-100 p-2 m-1">
              <div className="p-info px-3 py-3 ">
                  <div>
                      <h5 className="mb-3"> <span>{product.ProductName.slice(0,20)}</span> </h5>
                  </div>
                  <div className="p-price d-flex flex-row ms-3"> 
                  <span>$</span>
                      <h5 >{product.price}</h5>
                  </div>
                  
                  <div className="heart"> <i className="bx bx-heart"></i> </div>
              </div>
              <div className="text-center p-image"> <img src={product.ProductImage}  alt="" /> </div>
              <div className="p-about">
                  <p>{product.BaseSpec}</p>
              </div>
              <div className="buttons d-flex flex-row gap-3 px-3"> <button className="btn btn-danger w-100">View</button> <button className="btn btn-outline-danger w-100">Buy Now</button> </div>
          </div>
          </div>
          );}
        return ;
    })}
    </div>
  </Tab>
  <Tab eventKey="Monitors" title="Monitors" >
  <div className="row">
    {products.map((product)=>{
      if(product.category === "monitor"){
        return (
          <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center">
          <div className="card shadow-lg w-100 p-2 m-1">
              <div className="p-info px-3 py-3 ">
                  <div>
                      <h5 className="mb-3"> <span>{product.ProductName.slice(0,20)}</span> </h5>
                  </div>
                  <div className="p-price d-flex flex-row ms-3"> <span>$</span>
                      <h5 >{product.price}</h5>
                  </div>
                  <div className="heart"> <i className="bx bx-heart"></i> </div>
              </div>
              <div className="text-center p-image"> <img src={product.ProductImage}  alt="" /> </div>
              <div className="p-about">
                  <p>{product.BaseSpec}</p>
              </div>
              <div className="buttons d-flex flex-row gap-3 px-3"> <button className="btn btn-danger w-100">View</button> <button className="btn btn-outline-danger w-100">Buy Now</button> </div>
          </div>
          </div>
          );}
        return ;
    })}
    </div>
    
  </Tab>
  <Tab eventKey="Tv" title="Tv">
  <div className="row">
    {products.map((product)=>{
      if(product.category === "Tv"){
        return (
          <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center">
          <div className="card shadow-lg w-100 p-2 m-1">
              <div className="p-info px-3 py-3 ">
                  <div>
                      <h5 className="mb-3"> <span>{product.ProductName.slice(0,20)}</span> </h5>
                  </div>
                  <div className="p-price d-flex flex-row ms-3"> <span>$</span>
                      <h5 >{product.price}</h5>
                  </div>
                  <div className="heart"> <i className="bx bx-heart"></i> </div>
              </div>
              <div className="text-center p-image"> <img src={product.ProductImage}  alt="" /> </div>
              <div className="p-about">
                  <p>{product.BaseSpec}</p>
              </div>
              <div className="buttons d-flex flex-row gap-3 px-3"> <button className="btn btn-danger w-100">View</button> <button className="btn btn-outline-danger w-100">Buy Now</button> </div>
          </div>
          </div>
          );}
        return ;
    })}
    </div>
  </Tab>
  <Tab eventKey="Storage " title="Storage" >
  <div className="row">
    {products.map((product)=>{
      if(product.category === "storage"){
        return (
          <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center">
          <div className="card shadow-lg w-100 p-2 m-1">
              <div className="p-info px-3 py-3 ">
                  <div>
                      <h5 className="mb-3"> <span>{product.ProductName.slice(0,20)}</span> </h5>
                  </div>
                  <div className="p-price d-flex flex-row ms-3"> <span>$</span>
                      <h5 >{product.price}</h5>
                  </div>
                  <div className="heart"> <i className="bx bx-heart"></i> </div>
              </div>
              <div className="text-center p-image"> <img src={product.ProductImage}  alt="" /> </div>
              <div className="p-about">
                  <p>{product.BaseSpec}</p>
              </div>
              <div className="buttons d-flex flex-row gap-3 px-3"> <button className="btn btn-danger w-100">View</button> <button className="btn btn-outline-danger w-100">Buy Now</button> </div>
          </div>
          </div>
          );}
        return ;
    })}
    </div>
  </Tab>
  <Tab eventKey="Casing" title="Casing" >
  <div className="row">
    {products.map((product)=>{
      if(product.category === "casing"){
        return (
          <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center">
          <div className="card shadow-lg w-100 p-2 m-1">
              <div className="p-info px-3 py-3 ">
                  <div>
                      <h5 className="mb-3"> <span>{product.ProductName.slice(0,20)}</span> </h5>
                  </div>
                  <div className="p-price d-flex flex-row ms-3"> <span>$</span>
                      <h5 >{product.price}</h5>
                  </div>
                  <div className="heart"> <i className="bx bx-heart"></i> </div>
              </div>
              <div className="text-center p-image"> <img src={product.ProductImage}  alt="" /> </div>
              <div className="p-about">
                  <p>{product.BaseSpec}</p>
              </div>
              <div className="buttons d-flex flex-row gap-3 px-3"> <button className="btn btn-danger w-100">View</button> <button className="btn btn-outline-danger w-100">Buy Now</button> </div>
          </div>
          </div>
          );}
        return ;
    })}
    </div>
  </Tab>
</Tabs>
</div>
        </div>
    );
};

export default ProductTabs;