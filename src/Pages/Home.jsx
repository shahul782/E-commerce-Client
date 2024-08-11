import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import {API} from '../Global'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  console.log(API)
  
  const [productdata,setproductdata]=useState([]);
  const [searchparams,setsearchparams]= useSearchParams()
  console.log(searchparams)

  useEffect(()=>{
    fetch(API+'/products?'+searchparams,
      { method:"GET"}
    )
    .then((res)=>res.json()).then((res)=>{
      console.log(res.product)
      setproductdata(res.product)}).catch((error)=>console.log(error))

  },[searchparams])
  

  return (
    <div >
      <h1 className="text-xl font-bold flex justify-center items-center ">Latest Products</h1>
       <ProductCard  products={productdata}/>
    </div>
  );
};

export default Home;
