import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button";
import Register from './pages/Register';
import Login from './pages/Login';

function App() {


  return (
    <div>
    <Routes>
      
      <Route path="/" element={<h1>Home</h1>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
    </div>

  )
}

export default App
