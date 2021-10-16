import { useState,useEffect } from 'react';

const useBestSallers = () => {
    const [bestSaller,setBestSaller] = useState([]);
    useEffect(()=>{
        fetch('./bestSaller.json')
  .then(response => response.json())
  .then(data => {
      setBestSaller(data);
    console.log(data);
});
    },[])
    return ( bestSaller);
};

export default useBestSallers;