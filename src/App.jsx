import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button";
import Register from './pages/Register';
import Login from './pages/Login';
import NavbarH from './components/Navbar';
import List from './pages/List';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {


  return (
    <div>
      <NavbarH />
    <Routes>
      
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/book/list" element={<List />}/>
      <Route path="/book/view/:bookId" element={<Details />}/>
    </Routes>
    </div>

  )
}

export default App
