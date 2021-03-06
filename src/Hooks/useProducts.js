
import {useEffect,useState} from 'react';

const useProducts = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('../productFile.json')
  .then(response => response.json())
  .then(data => {
      setProducts(data);
});
    },[])

   


    return products;
};

export default useProducts;