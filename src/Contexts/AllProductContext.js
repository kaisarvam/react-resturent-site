import React from 'react';
import { createContext } from 'react';
import useProducts from '../Hooks/useProducts';

export const ProductContext = createContext();

const AllProductContext = ({children}) => {
    const Products = useProducts();
    console.log("From context page : ",Products)
    return (
        <ProductContext.Provider value={Products}>
         {children}
        </ProductContext.Provider>
    );
};

export default AllProductContext;