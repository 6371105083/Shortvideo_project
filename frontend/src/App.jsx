// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home';
import Register from './components/Register'
import Profile from './components/Profile';
import {ToastContainer} from 'react-toastify';
import { createContext, useReducer } from 'react';



function App() {

  return (
    <>
    


<ToastContainer theme='colored' ></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}> </Route>
          <Route path='/login' element={<Login></Login>}> </Route>
          <Route path='/register' element={<Register></Register>}> </Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
