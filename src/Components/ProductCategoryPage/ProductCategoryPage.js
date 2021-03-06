
import { useContext } from 'react';
import Rating from 'react-rating';
import {ProductContext} from '../../Contexts/AllProductContext';
import { useParams } from 'react-router';
import { useState ,useEffect } from 'react';


export default function ProductCategoryPage() {
  const [allProduct,setAllProduct] = useState([]);
const productsAll = useContext(ProductContext);
console.log("fromcategory wise product : ",productsAll)
  useEffect(() => {
    setAllProduct(productsAll[0]);
  }, [productsAll])

    
    console.log("context data in products category page is  : ",allProduct);
    const {Category} = useParams();
    console.log("Category is :",Category);
    
    
        
        return (
            <div className="container">
            <div className=" mt-5 pt-5">
                 <h1 className="fw-bold mt-5 mb-5">Selected Category <span className="text-success">{Category.toUpperCase()}</span></h1>
            <div className="row g-2">
                {
                    
                    allProduct.map((product)=>{
                    if(Category === 'all'){
                        return(
                            <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center " key={product.id}>
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
                    }else if(product.category===Category){
                            return(
                                <div className=" col-md-4 col-12  d-flex align-items-center justify-content-center " key={product.id}>
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
                        }

                        return null;
                       
                    })
                }
        </div>
        </div>
        </div>
        );
    
};


