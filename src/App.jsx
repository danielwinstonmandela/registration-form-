import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // Watch the password field
  const password = watch("password");

  console.log(errors);

  return (
    <div className='container'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type="text" 
        placeholder="username" 
        {...register("username", { required: "Username is required" })} 
      />
      {errors.username && <p>{errors.username.message}</p>}
      
      <input 
        type="email" 
        placeholder="email" 
        {...register("email", { 
          required: "Email is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Email is not valid"
          }
        })} 
      />
      {errors.email && <p>{errors.email.message}</p>}
      
      <input 
        type="number" 
        placeholder="telephone number" 
        {...register("telephone number", {
          required: "Telephone number is required",
          minLength: {
            value: 10,
            message: "Telephone number must be at least 10 digits"
          },
          maxLength: {
            value: 15,
            message: "Telephone number cannot exceed 15 digits"
          }
        })} 
      />
      {errors["telephone number"] && <p>{errors["telephone number"].message}</p>}
      
      <input 
        type="password" 
        placeholder="password" 
        {...register("password", { 
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters"
          }
        })} 
      />
      {errors.password && <p>{errors.password.message}</p>}
      
      <input 
        type="password" 
        placeholder="confirm password" 
        {...register("confirm password", { 
          required: "Please confirm your password",
          validate: value => value === password || "Passwords do not match"
        })} 
      />
      {errors["confirm password"] && <p>{errors["confirm password"].message}</p>}
      
      <input type="submit" />
    </form>
    </div>
  );
}
