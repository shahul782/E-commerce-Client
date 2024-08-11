import React from 'react'
import { Button, TextField } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API } from "../Global";

const Login = () => {
  const navigate = useNavigate()
  const FormValidationSchema = yup.object({
    email: yup.string().required("Enter a valid email").min(5, "Type more than 5 letters"),
    Password: yup.string().required("Enter a valid password").min(5),
  });


const {handleChange,handleBlur,values,handleSubmit} =useFormik({
initialValues:{email:"shahul@gamil.com",Password:"sha@12345"},
validationShema:FormValidationSchema,
onSubmit: (values) => {
  console.log(values);
  loginfetch(values);
}

})

  

const loginfetch = (data)=>{
  fetch(`${API}/login`,{
    method:"POST",
    body:JSON.stringify(data),
    headers:{'content-type':"application/json"},
  }).then((res)=>res.json()).then((data)=>{
    if(data){
      console.log(data.msg)
      navigate('/outlet/home')

    }else{
      console.log("not fetch"+data.error);

    }
  })
}


  return (

     <>
     <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-5 p-3">
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          name="email" 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
  
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          name="password" 
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
    
        />
        <Button variant="contained" type="submit">login</Button>
      </form>
    <div> NewUser?<Link to={'/register'}>Register</Link></div>
    <div><Link to={'/forgotpassword'}>Forgot Password</Link></div>
    </>
  )
}

export default Login