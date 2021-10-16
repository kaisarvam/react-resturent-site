import React from 'react';
import './ProductsectionOne.css';

const ProductsectionOne = () => {
    return (
        <section class="container-fluid overflow-hidden my-5">
    <div class="row gy-2">
        <div class="col-lg-4 col-md-6 col-12">
              <div class="p-3 border bg-warning d-flex align-items-center justify-content-between rounded-3">
                  <h1 class="text-white">Laptop</h1>
                  <i class="fas fa-laptop icon-size"></i>
              </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
            <div class="p-3 border bg-success d-flex align-items-center justify-content-between rounded-3">
                <h1 class="text-white">Monitor</h1>
                <i class="fas fa-desktop icon-size"></i>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 ">
            <div class="p-3 border bg-danger d-flex align-items-center justify-content-between rounded-3">
                <h1 class="text-white">Components</h1>
                <i class="fas fa-microchip icon-size"></i>
            </div>
        </div>
      </div>
</section>
    );
};

export default ProductsectionOne;