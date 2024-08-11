import React, { useEffect, useState } from 'react'
import iphone from '../assets/iphone.jpg'
import { styled, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';
import {API} from '../Global'
import { toast } from 'react-toastify';


const ProductDetails = ({cartitems,setcartitems}) => {
const [qty,setqty]=useState(1)
const [product,setproduct]=useState("");
const {id}= useParams();

console.log(cartitems)


const increment = ()=>{

if(product.stock == qty){
return;
}
  setqty((state)=>state+1)
}

const decrement = ()=>{

  if(qty>1){
    setqty((state)=>state-1)
  }
    
  }



useEffect(()=>{
    fetch(API+'/products/'+id,
      { method:"GET"}
    )
    .then((res)=>res.json()).then((res)=>{
      console.log(res.product.images[0].image)

      setproduct(res.product)
       console.log(res.product,"check"+product)}
    ).catch((error)=>console.log(error))

  },[id])

     const itemExist = cartitems?.find((item)=>item.product._id == product._id)


  function addtocart(){

    if(!itemExist){
      const newitem = {product,qty}
      setcartitems((state)=>[...state,newitem])
      toast.success("successfully added in cart");
    } 
    }
  return (
    <div>
    {product ?  
    <div className='flex  p-5 justify-evenly  items-center '>
        <div>
            <img src={product.images[0].image} alt='image' className='h-80 w-80'/>
        </div>
        <div className='flex justify-center items-center flex-col w-96 gap-2'>
        <b>{product.name}</b>
        <b>{product.category}</b>
        <b>${product.price}</b>
        <b className='text-sm'>{product.createdAt}</b>
        <b className="text-gray-700">{product.ratings}/10</b>
        <p className="font-bold text-black">status : <span className={product.stock > 0 ?'text-green-600':'text-red-600' }>{product.stock > 0 ? "in stock":"out of stock"}</span></p>
        <p className='font-bold text-black'> soldBy: <strong>{product.seller}</strong></p>
        <p className='font-bold text-black'> Description: {product.description}</p>
        <div className='flex  '>
            <p className='bg-red-500 flex items-center p-2 py-1 rounded-lg text-white' onClick={decrement}>-</p>
            <input type='number' value={qty} className='w-9'/>
            <p className='bg-blue-700 p-2 rounded-lg text-white' onClick={increment}>+</p>
            <button className='bg-orange-500  px-6 py-2 rounded-full text-white' onClick={addtocart} disabled={product.stock == 0}>Add to Cart</button>
        </div>
        </div>
    </div>:""}
    </div>
  )
}

export default ProductDetails