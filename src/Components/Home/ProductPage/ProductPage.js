import React from 'react';
import './ProductPage.css';
import useProducts from '../../../Hooks/useProducts';
import './ProductPage.css';
import Rating from 'react-rating';


const ProductPage = () => {
    const allProduct = useProducts();
    console.log("from product page",allProduct);
    return (
        <div className="container-fluid mt-5 pt-5">
            <h1 className="fw-bold mt-5 mb-5">All <span className="text-success">Products </span></h1>
        <div className="row g-2">
                {
                    allProduct.map((product)=>{
                        return(
                            <div className=" col-md-3 col-12  d-flex align-items-center justify-content-center ">
          <div className="card card-height m-1 shadow-dark-card">
  <img src={product.ProductImage} className="img-thumbnail" alt="..." />
  <div className="card-body">
    <h5 className="card-title fw-bold ">{product.ProductName.slice(0,20)}</h5>
    <p className="card-title text-info fw-bold">{product.category.toUpperCase()}</p>
    <p className="card-text">{product.BaseSpec.slice(0,200)}</p>
    <p className="m-0 p-0">  <Rating 
               readonly
            fullSymbol="fas fa-star text-warning "
            emptySymbol="far fa-star text-warning "
           initialRating={product.rating}>
               </Rating>
               </p>
               <p className="m-0 p-0">Avarage Rating : {product.rating.toFixed(2)}</p>
               <p className="m-0 p-0">Rated : {product.rated}</p>

    </div>
    <div className="card-footer m-2">
    
      <h4 className="m-1 p-2  "> Current Price : <span className="fw-bold"> {product.price}  BDT </span></h4>
    <div className="d-flex justify-content-evenly align-items-center">
    <button className="btn btn-warning shadow-dark">Buy Now</button>
    <button className="btn btn-primary shadow-dark">More info</button>
    </div>
    </div>
  </div>
</div>
                        );
                    })
                }
        </div>
        </div>
    );
};

export default ProductPage;