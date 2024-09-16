import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/NavBar'
import Login from './pages/Login';
import RegisterPage from './pages/Register';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';


function App() {
  

  return (
    <>
      <BrowserRouter>
   <Navbar/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </>
  )
}

export default App
