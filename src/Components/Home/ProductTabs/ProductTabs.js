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
            <div className="">
            <Tabs defaultActiveKey="Monitors" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Laptops" title="Laptops">
  <div className="row">
    {products.map((product)=>{
      if(product.category === "laptop"){
        return (
          <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center ">
          <div className="card card-height m-1">
  <img src={product.ProductImage} className="img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-nowrap">{product.ProductName.slice(0,15)}</h5>
    <p className="card-text">{product.BaseSpec.slice(0,50)}</p>
    </div>
    <div className="card-footer">
    <div className="d-flex justify-content-between align-items-center">
    <button className="btn btn-info">Buy Now</button>
    <button className="btn btn-primary">More info</button>
    </div>
    </div>
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
          <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center ">
          <div className="card card-height m-1">
  <img src={product.ProductImage} className="img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-nowrap">{product.ProductName.slice(0,15)}</h5>
    <p className="card-text">{product.BaseSpec.slice(0,50)}</p>
    </div>
    <div className="card-footer">
    <div className="d-flex justify-content-between align-items-center">
    <button className="btn btn-info">Buy Now</button>
    <button className="btn btn-primary">More info</button>
    </div>
    </div>
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
          <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center ">
          <div className="card card-height m-1">
  <img src={product.ProductImage} className="img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-nowrap">{product.ProductName.slice(0,15)}</h5>
    <p className="card-text">{product.BaseSpec.slice(0,50)}</p>
    </div>
    <div className="card-footer">
    <div className="d-flex justify-content-between align-items-center">
    <button className="btn btn-info">Buy Now</button>
    <button className="btn btn-primary">More info</button>
    </div>
    </div>
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
          <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center ">
          <div className="card card-height m-1">
  <img src={product.ProductImage} className="img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-nowrap">{product.ProductName.slice(0,15)}</h5>
    <p className="card-text">{product.BaseSpec.slice(0,50)}</p>
    </div>
    <div className="card-footer">
    <div className="d-flex justify-content-between align-items-center">
    <button className="btn btn-info">Buy Now</button>
    <button className="btn btn-primary">More info</button>
    </div>
    </div>
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
          <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center ">
          <div className="card card-height m-1">
  <img src={product.ProductImage} className="img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-nowrap">{product.ProductName.slice(0,15)}</h5>
    <p className="card-text">{product.BaseSpec.slice(0,50)}</p>
    </div>
    <div className="card-footer">
    <div className="d-flex justify-content-between align-items-center">
    <button className="btn btn-info">Buy Now</button>
    <button className="btn btn-primary">More info</button>
    </div>
    </div>
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