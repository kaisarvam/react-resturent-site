import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductsectionOne.css';

const ProductsectionOne = () => {
    return (
        <section className="container-fluid overflow-hidden my-5">
            
    <div className="row gy-2">
        <div className="col-lg-3 col-md-6 col-12  ">
            <NavLink to="product/laptop" style={{ textDecoration: 'none' }}>
              <div className="p-3 border bg-warning d-flex align-items-center justify-content-between rounded-3" >
                  <h1 className="text-white">Laptop</h1>
                  <i className="fas fa-laptop icon-size"></i>
              </div>
              </NavLink>
        </div>
        <div className="col-lg-3 col-md-6 col-12  ">
            <NavLink to="product/monitor" style={{ textDecoration: 'none' }}>
            <div className="p-3 border bg-success d-flex align-items-center justify-content-between rounded-3">
                <h1 className="text-white">Monitor</h1>
                <i className="fas fa-desktop icon-size"></i>
            </div>
            </NavLink>
        </div>

        <div className="col-lg-3 col-md-6 col-12  ">
            <NavLink to="product/ram" style={{ textDecoration: 'none' }}>
            <div className="p-3 border bg-danger d-flex align-items-center justify-content-between rounded-3">
                <h1 className="text-white">RAM</h1>
                <i className="fas fa-microchip icon-size"></i>
            </div>
            </NavLink>
        </div>

        <div className="col-lg-3 col-md-6 col-12  ">
            <NavLink to="product/casing" style={{ textDecoration: 'none' }}>
            <div className="p-3 border bg-info d-flex align-items-center justify-content-between rounded-3">
                <h1 className="text-white">Casing</h1>
                <i className="fas fa-hdd icon-size"></i>
            </div>
            </NavLink>
        </div>
        
      </div>
</section>
    );
};

export default ProductsectionOne;