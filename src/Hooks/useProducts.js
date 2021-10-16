
import {useEffect,useState} from 'react';

const useProducts = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('./productFile.json')
  .then(response => response.json())
  .then(data => {
      setProducts(data);
    console.log(data);
});
    },[])


    return (products);
};

export default useProducts;