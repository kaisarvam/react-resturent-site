import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useContext } from 'react';
import { ProductContext } from '../../../Contexts/AllProductContext';
import { useState ,useEffect } from 'react';
import './ProductTabs.css'

const ProductTabs = () => {
    const[products,setProducts] = useState([]);
    const All = useContext(ProductContext);
    const addCart = All[2][0];
    
 
useEffect(()=>{
    setProducts(All[0]);
},[All,products])


   
   
 
    return (
        <div className="col-md-8 col-12 ">
             <div className="">

        <h1 className="mt-2 mb-2 fw-bold">All Products</h1>
            <Tabs defaultActiveKey="Laptops" id="uncontrolled-tab-example" className=" mb-4">
  <Tab eventKey="Laptops" title="Laptops">
  <div className="row g-4">
    {products.map((product)=>{
      if(product.category === "laptop"){
        return (
          <div className="col-md-4" key={product.id}>
          <div className="product py-4"> <span className="off bg-success">-{product.discount}% OFF</span>
              <div className="text-center"> <img alt="" src={product.ProductImage} width="200" /> </div>
              <div className="about text-center">
                  <h5>{product.ProductName.slice(0,30)}</h5> <span>${product.price}</span>
              </div>
              <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center"> <button className="btn btn-primary text-uppercase" onClick={(e)=>{addCart(product); e.target.classList.add("disabled")}}>Buy Now</button>
                  <div className="add"> <span className="product_fav"><i  className="fas fa-cart-plus"></i></span> <span className="product_fav"><i  className="fas fa-info-circle"></i></span> </div>
              </div>
          </div>
      </div> 
        
         
          );}
        return null ;
    })}
    </div>
  </Tab>
  <Tab eventKey="Monitors" title="Monitors" >
  <div className="row g-4 ">
    {products.map((product)=>{
      if(product.category === "monitor"){
        return (
          <div className="col-md-4" key={product.id}>
            <div className="product py-4"> <span className="off bg-success">-{product.discount}% OFF</span>
                <div className="text-center"> <img alt="" src={product.ProductImage} width="200" /> </div>
                <div className="about text-center">
                    <h5>{product.ProductName.slice(0,30)}</h5> <span>${product.price}</span>
                </div>
                <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">  <button className="btn btn-primary text-uppercase" onClick={(e)=>{addCart(product); e.target.classList.add("disabled")}}>Buy Now</button>
                    <div className="add"> <span className="product_fav"><i  className="fas fa-cart-plus"></i></span> <span className="product_fav"><i  className="fas fa-info-circle"></i></span> </div>
                </div>
            </div>
        </div>
          );}
        return null ;
    })}
    </div>
    
  </Tab>
  <Tab eventKey="Tv" title="Tv">
  <div className="row g-4 ">
    {products.map((product)=>{
      if(product.category === "Tv"){
        return (
          <div className="col-md-4" key={product.id}>
            <div className="product py-4"> <span className="off bg-success">-{product.discount}% OFF</span>
                <div className="text-center"> <img alt="" src={product.ProductImage} width="200" /> </div>
                <div className="about text-center">
                    <h5>{product.ProductName.slice(0,30)}</h5> <span>${product.price}</span>
                </div>
                <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">  <button className="btn btn-primary text-uppercase" onClick={(e)=>{addCart(product); e.target.classList.add("disabled")}}>Buy Now</button>
                    <div className="add"> <span className="product_fav"><i  className="fas fa-cart-plus"></i></span> <span className="product_fav"><i  className="fas fa-info-circle"></i></span> </div>
                </div>
            </div>
        </div>
          );}
        return  null;
    })}
    </div>
  </Tab>
  <Tab eventKey="Storage " title="Storage" >
  <div className="row g-4">
    {products.map((product)=>{
      if(product.category === "storage"){
        return (
          <div className="col-md-4" key={product.id}>
            <div className="product py-4"> <span className="off bg-success">-{product.discount}% OFF</span>
                <div className="text-center"> <img alt="" src={product.ProductImage} width="200" /> </div>
                <div className="about text-center">
                    <h5>{product.ProductName.slice(0,30)}</h5> <span>${product.price}</span>
                </div>
                <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">  <button className="btn btn-primary text-uppercase" onClick={(e)=>{addCart(product); e.target.classList.add("disabled")}}>Buy Now</button>
                    <div className="add"> <span className="product_fav"><i  className="fas fa-cart-plus"></i></span> <span className="product_fav"><i  className="fas fa-info-circle"></i></span> </div>
                </div>
            </div>
        </div>
          );}
        return  null;
    })}
    </div>
  </Tab>
  <Tab eventKey="Casing" title="Casing" >
  <div className="row g-4">
    {products.map((product)=>{
      if(product.category === "casing"){
        return (
          <div className="col-md-4" key={product.id}>
            <div className="product py-4"> <span className="off bg-success">-{product.discount}% OFF</span>
                <div className="text-center"> <img alt="" src={product.ProductImage} width="200" /> </div>
                <div className="about text-center">
                    <h5>{product.ProductName.slice(0,30)}</h5> <span>${product.price}</span>
                </div>
                <div className="cart-button mt-3 px-2 d-flex justify-content-between align-items-center">  <button className="btn btn-primary text-uppercase" onClick={(e)=>{addCart(product); e.target.classList.add("disabled")}}>Buy Now</button>
                    <div className="add"> <span className="product_fav"><i  className="fas fa-cart-plus"></i></span> <span className="product_fav"><i  className="fas fa-info-circle"></i></span> </div>
                </div>
            </div>
        </div>
          );}
        return   null;
    })}
    </div>
  </Tab>
</Tabs>
</div>
        </div>
    );
};

export default ProductTabs;