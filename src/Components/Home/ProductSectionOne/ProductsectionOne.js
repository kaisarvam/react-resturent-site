import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductsectionOne.css';

const ProductsectionOne = () => {
    return (
        <section class="container-fluid overflow-hidden my-5">
            
    <div class="row gy-2">
        <div class="col-lg-3 col-md-6 col-12  ">
            <NavLink to="product/laptop" style={{ textDecoration: 'none' }}>
              <div class="p-3 border bg-warning d-flex align-items-center justify-content-between rounded-3" >
                  <h1 class="text-white">Laptop</h1>
                  <i class="fas fa-laptop icon-size"></i>
              </div>
              </NavLink>
        </div>
        <div class="col-lg-3 col-md-6 col-12  ">
            <NavLink to="product/monitor" style={{ textDecoration: 'none' }}>
            <div class="p-3 border bg-success d-flex align-items-center justify-content-between rounded-3">
                <h1 class="text-white">Monitor</h1>
                <i class="fas fa-desktop icon-size"></i>
            </div>
            </NavLink>
        </div>

        <div class="col-lg-3 col-md-6 col-12  ">
            <NavLink to="product/ram" style={{ textDecoration: 'none' }}>
            <div class="p-3 border bg-danger d-flex align-items-center justify-content-between rounded-3">
                <h1 class="text-white">RAM</h1>
                <i class="fas fa-microchip icon-size"></i>
            </div>
            </NavLink>
        </div>

        <div class="col-lg-3 col-md-6 col-12  ">
            <NavLink to="product/casing" style={{ textDecoration: 'none' }}>
            <div class="p-3 border bg-danger d-flex align-items-center justify-content-between rounded-3">
                <h1 class="text-white">Casing</h1>
                <i class="fas fa-hdd icon-size"></i>
            </div>
            </NavLink>
        </div>
        
      </div>
</section>
    );
};

export default ProductsectionOne;