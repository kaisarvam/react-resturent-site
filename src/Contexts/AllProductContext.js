import React from 'react';
import { createContext } from 'react';
import useBestSallers from '../Hooks/useBestSallers';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';

export const ProductContext = createContext();

const AllProductContext = ({children}) => {
    const Products = useProducts();
    const BestSaller = useBestSallers();
    const CartAll = useCart()
    return (
        <ProductContext.Provider value={[Products,BestSaller,CartAll]}>
         {children}
        </ProductContext.Provider>
    );
};

export default AllProductContext;