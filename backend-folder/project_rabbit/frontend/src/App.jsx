import './App.css'
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserLayout from './componenets/Layout/UserLayout';
import Admin from './componenets/Admin/Admin'
import Home from './pages/Home'
import Login from './pages/Login';
import {Toaster} from "sonner"
import Register from './pages/Register';
import Profile from './pages/Profile';

const App = () => {
  return (

<BrowserRouter>
<Toaster position = "top-right"/>
<Routes>

   {/* User Layout with Nested Route */}
  <Route path='/' element={<UserLayout/>}>
  
    <Route index element={<Home/>}/>  
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="profile" element={<Profile/>}/>

  </Route>

    {/**Admin Layout */}
  <Route path='/admin' element={<Admin/>}/>

</Routes>
</BrowserRouter>
  );
}

export default App
