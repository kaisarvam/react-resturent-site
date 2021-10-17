import React from 'react';
import CartDisplay from './CartDisplay/CartDisplay';
import { useContext } from 'react';
import { ProductContext } from '../../Contexts/AllProductContext';

const CartPage = () => {
    const allProduct = useContext(ProductContext);
    console.log("from cart page : ",allProduct);
    const cart = allProduct[2][1];
    let i= 0;
    let total = 0;
    cart.map((product)=>{
        return (total = total + product.price);
      })

    return (
        <div className="mt-5 pt-5">
            <h1>Cart page</h1>
            <div className="container">
            
            <table className="table mb-5 table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Category</th>
      <th scope="col">Discount</th>
      <th scope="col">Price</th>
      
    </tr>
  </thead>
  <tbody>
            {
                cart.map((product)=>{
                    return(
                       <CartDisplay product={product}></CartDisplay>
                    )
                })
            }
            
            <tr>
        <th scope="row"> </th>
        <td> </td>
        <td> </td>
        <td> </td>
        <td className="fw-bolder"><strong> Total :  {total}$ </strong> </td>
      </tr>
            </tbody>
            </table>
            </div>
        </div>
    );
};

export default CartPage;