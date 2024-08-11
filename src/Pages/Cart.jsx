import React, { useState } from 'react'
import { Delete } from '@mui/icons-material'
import { Fragment } from 'react'
import { API } from '../Global'
import { toast } from 'react-toastify';


const Cart = ({cartitems,setcartitems}) => {

  const [complete,setcomplete]=useState(false)
 console.log(cartitems)

 const placeOrder = ()=>{
  fetch(API+'/order',{
    method:"POST",
    headers:{'content-Type':"application/json"},
    body:JSON.stringify(cartitems)
  })
  .then(()=>setcartitems([]))
  setcomplete(true);
  toast.success('ordered successfully ')
 }

 function increment  (item){
  if(item.product.stock == item.qty){
  return;
  }
  console.log(item.product.stock == item.qty)

  const updateitems = cartitems.map((i)=>{
    if(i.product._id == item.product._id){
      i.qty++;
    }
    return i;
  })
  setcartitems(updateitems)
  
  }
  
  const decrement = (item)=>{
  
    if(item.qty>1){
      const updateitems = cartitems.map((i)=>{
        if(i.product._id == item.product._id){
          i.qty--;
        }
        return i;
      })
      setcartitems(updateitems)
    }
      
    }

    function Removeitems (item){
      const updateitems = cartitems.filter((i)=>{
        if(i.product._id !== item.product._id){
        return true;

        }
      })
      setcartitems(updateitems)

    }
  return (

   cartitems.length>0 ? <Fragment> 

    <div >
        <div className='flex justify-center items-center text-center font-bold'>
      <p>Your Cart:<b>{cartitems.length}</b> </p>
        </div>
    
   <div className=' flex flex-row  gap-5 '>
    <div>
     {cartitems.map((item)=>
     <Fragment>
  <img src={item.product?.images[0].image} className='w-96 h-80' />
    <p className='w-64'>{item.product.name}</p>
    <p className='w-64'>{item.product.description}</p>
    <p className='text-orange-500'>${item.product.price}</p>

    <div className='flex flex-row text-center items-center '>
        <p className='bg-red-500 p-1 w-6 h-6  rounded-lg' onClick={()=>decrement(item)}>-</p>
        <input type='number' value={item.qty} className=''/>
        <p className='bg-blue-600 p-1 w-6 h-6 rounded-lg' onClick={()=>increment(item)}>+</p>
        <Delete onClick={()=>Removeitems(item)} />
    </div>
     </Fragment>
    )}
  
    </div>

   <div className=' flex flex-col gap-4'>
    <p className='text-xl'>Order Summary</p>
      <div className='flex flex-row gap-3'>
        <p>Subtotal:</p>
        <p>{cartitems.reduce((acc,item)=>(acc+item.qty),0)}(units)</p>
      </div>
      <div className='flex flex-row gap-3'>
        <p >EST.total:</p>
        <p>${cartitems.reduce((acc,item)=>(acc+item.product.price * item.qty),0)}</p>
      </div>
      <button className='text-white px-10 bg-orange-400 rounded-xl py-1' onClick={placeOrder}>Place Order</button>
   </div>

   </div>
    </div>
    </Fragment>: (! complete ? <p className='flex justify-center items-center'>"your cart is empty"</p> :<Fragment>
      <h2>Order completed <p>Your order has been placed successfully</p></h2>
    </Fragment>)
  )
}

export default Cart