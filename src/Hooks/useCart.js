
import { useState } from 'react';

const useCart = () => {
    const [cart,setCart] = useState([]);

    const addToCart = (value)=>{
      
        if(cart){
              const NewValue = [...cart,value]
              setCart(NewValue);
        }else{
          setCart(value);
        }
  

        console.log("data in cart is :",cart);
      
      
    }
    return ([addToCart ,cart]);
};

export default useCart;