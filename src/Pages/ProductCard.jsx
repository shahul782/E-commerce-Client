import React from 'react'
import Card from '@mui/material/Card';
import { useNavigate, useParams } from 'react-router-dom';

const ProductCard = ({products}) => {
  const navigate = useNavigate()

 
  
  return (
<div className=' gap-5 px-10 py-10  md:grid md:grid-cols-4    sl:grid sl:grid-cols-1 sl:flex sl:justify-center  sl:text-center' >
          { products?.map((product, i) => (
          <Card key={i} className="border p-4  bg-slate-500 flex flex-col justify-center items-center ">
            <div>
            <img src={product.images[0].image} alt="images" className="w-60 h-64 " />
            </div>
            <div className="text-lg font-bold hover:text-red-600 " onClick={()=>{navigate(`/product-detail/${product._id}`)}}>{product.name}</div>
            <div className="text-gray-700">Rating: {product.ratings}/10</div>
            <div className="text-gray-700">Price: ${product.price}</div> 
            <div  className='mt-auto'>
            <button onClick={()=>{navigate(`/product-detail/${product._id}`)}}  className='bg-orange-600 px-10 py-2  rounded-lg text-white hover:bg-red-600 bottom-0 '>View Details </button>
            </div>
          </Card>
        ))
    }  
      
      </div>
  )
}

export default ProductCard