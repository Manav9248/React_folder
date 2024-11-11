import React from 'react'
import { useForm } from 'react-hook-form'
import './App.css'


const App = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();


 async function onSubmit_fun(data){

    //API call ko simulate krte h
    await new Promise((resolve)=> setTimeout(resolve,5000));
    console.log("Submitting the form",data);

  }

  return (

  <form onSubmit={handleSubmit(onSubmit_fun)}
  className='text-center text-black' >

  <div className='pt-10 '>
    <label>First Name: </label>
    <input className={errors.firstName ? 'input-error':""}
     type="text" {...register("firstName",
    { required: true,
    minLength:{value:3,message:"Min Len atleast 3"},
    maxLength:{value:6,message:"Max Len atmost 6"} 
    })} />
    {errors.firstName && <p className={errors.firstName ? 'error-msg':''}>{errors.firstName.message}</p>}
  </div>
  <br />

  <div>
    <label>Middle Name: </label>
    <input type="text" {...register("middleName")}/>
  </div>
  <br />

  <div>
    <label>Last Name: </label>
    <input type="text" {...register("lastName")}/>
  </div>
  <br />

  <input disabled = {isSubmitting} value={isSubmitting ? "submitting" : "Submit"}
  className='border-2 border-blue-700' type="submit" />
      
   </form>

  )
}

export default App