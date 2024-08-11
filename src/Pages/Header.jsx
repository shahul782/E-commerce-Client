import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from '../assets/logo-1.jpg'


const Header = ({cartitems}) => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    if (keyword) {
      navigate(`/search?keyword=`+keyword);
    }
  };
const handleChagehome =()=>{
  navigate('/')
}
const getproduct =(e)=>{
  e.preventDefault();
  const checkString = e.target.value;
  console.log(checkString) 
  if(checkString == ""){
    navigate(`/search?keyword=`);
  }

}

const cartclick = ()=>{
  navigate('/cart')
}

  return (
    // <div>
    //   <nav className='bg-[#2F4F4F] flex h-14 items-center justify-evenly text-white'>
    //     <h1 className='font-bold' onClick={handleChagehome}>shahul</h1>
    //     <div className="w-96">
    //       <div className="flex">
    //         <div className="relative w-full">
    //           <input
    //             type="text"
    //             onChange={(e)=>{setKeyword(e.target.value)
    //               getproduct(e)
    //             }}
    //             className="rounded-lg block p-2.5 w-full z-20 text-black focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
    //             placeholder="Search items"
    //             required
    //           />
    //           <button
    //             type="button"
    //             onClick={(e)=>searchHandler(e)}
    //             className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-orange-600 focus:ring-4"
    //           >

    //             <Search />
    //             <span className="sr-only">Search</span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     {/* <p>Cart</p> */}

    //     <div className='flex gap-2' onClick={cartclick} >
    //       <span>Cart</span>
    //       <span>{cartitems.length}</span>
    //     </div>
    //   </nav>
    // </div>
<nav class="bg-blue-600 border-gray-200 dark:bg-gray-900 bg ">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
  {/* <h2>Logo</h2> */}
  <img src={logo} className='' style={{height:"40px",width:"40px",objectFit:"cover"}}/>
  <div class="flex md:order-2">
  {/* <div className='flex gap-2 bg-green-500 px-6 m-1 rounded-lg' onClick={cartclick} >
          <span className='flex items-center text-center'>Cart</span>
           <span className='flex items-center text-center'>{cartitems.length}</span>
         </div> */}
     
<button type="button" onClick={cartclick} class="bg-transparent relative inline-flex m-2   items-center  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>
<span class="sr-only ">Notifications</span>
  <div class="absolute  inline-flex items-center justify-center w-4 h-4 text-sm font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-2 dark:border-gray-900">{cartitems.length}</div>
</button>


         
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search</span>
    </button>
 <div className="relative w-full border-gray-500  m-1">
               <input
                 type="text"
                 onChange={(e)=>{setKeyword(e.target.value)
                   getproduct(e)
                 }}
                 className="rounded-lg block p-2.5 w-full z-20 text-black focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                 placeholder="Search items"
                 required
               />
               <button
                 type="button"
                 onClick={(e)=>searchHandler(e)}
                 className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-orange-600 focus:ring-4"
              >

               <Search />
                <span className="sr-only">Search</span>
              </button>
            </div>
            <button className='bg-slate-400 m-1 px-6 rounded-lg' >login</button>
  
  </div>
    <div class="items-center justify-between hidden w-full ml-52 md:flex md:w-auto md:order-1 ml-6" id="navbar-search">
      <ul class="flex flex-col  m-1  md:p-0  font-medium   rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to={'/'} class="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
          {/* <h1 className='font-bold' onClick={handleChagehome}>shahul</h1> */}
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
      </ul>
    </div>

   
  </div>
</nav>

  );

};

export default Header;
