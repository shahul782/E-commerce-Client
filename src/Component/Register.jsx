import React from "react";
import TextField from "@mui/material/TextField";
import { toast } from 'react-toastify';
import { Button } from "@mui/material";
import { API } from "../Global";
import { useFormik } from 'formik';                                                                                                                                                                                     
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const FormValidationSchema = yup.object({
    email: yup.string().required("Enter a valid email").min(5, "Type more than 5 letters"),
    password: yup.string().required("Enter a valid password").min(5),
  });

  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: { email: "testmail@gmail.com", password: "Test@123" },
    validationSchema: FormValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      RegisterFetch(values);
    }
  });

  const RegisterFetch = (data) => {
    fetch(`${API}/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          toast.error(data.error);
        } else {
          console.log(data);
          toast.success(data.msg);
          navigate("/");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('An error occurred during registration');
      });
  };

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
          error={errors.email && touched.email}
          helperText={errors.email && touched.email ? errors.email : ""}
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
          error={errors.password && touched.password}
            helperText={errors.password && touched.password ? errors.password : ""}
        />
        <Button variant="contained" type="submit">Register</Button>
      </form>
    </>
  );
};

export default Register;
