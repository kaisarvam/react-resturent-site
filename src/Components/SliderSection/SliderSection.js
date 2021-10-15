import React from 'react';

const SliderSection = () => {
    return (
        <div className="col-md-8  col-12">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://via.placeholder.com/350x150" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="mb-0">First slide label</h5>
        <p className="mb-0">Some representative placeholder content for the first slide.</p>
        <div className="d-flex justify-content-center align-items-center mt-3 ">
        <a href="#" className="btn btn-primary me-3">Buy</a>
        <a href="#" className="btn btn-warning">Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://via.placeholder.com/350x150" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="mb-0">Second slide label</h5>
        <p className="mb-0">Some representative placeholder content for the second slide.</p>
        <div className="d-flex justify-content-center align-items-center mt-3 ">
        <a href="#" className="btn btn-primary me-3">Buy</a>
        <a href="#" className="btn btn-warning">Add To Cart</a>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://via.placeholder.com/350x150" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 className="mb-0">Third slide label</h5>
        <p className="mb-0">Some representative placeholder content for the third slide.</p>
        <div className="d-flex justify-content-center align-items-center mt-3 ">
        <a href="#" className="btn btn-primary me-3">Buy</a>
        <a href="#" className="btn btn-warning">Add To Cart</a>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    );
};

export default SliderSection;