import React from 'react';

const CartDisplay = ({product}) => {
    return (
   
         <tr>
        <th scope="row">{product.id}</th>
        <td><strong>{product.ProductName.slice(0,20).toUpperCase()}</strong></td>
        <td>{product.category.toUpperCase()}</td>
        <td>{product.discount}%</td>
        <td><strong>Price : {product.price}$ </strong></td>
      </tr>
        
    );
};

export default CartDisplay;