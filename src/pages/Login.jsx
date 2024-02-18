import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate();

  const firebase = useFirebase();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await firebase.loginUser(email,password);
  }
  const handleGoogle = async (e)=>{
    e.preventDefault();
    await firebase.loginGoogle();
  }

  useEffect(()=>{
    if (firebase.isLoggedIn) navigate("/")
  },[firebase,navigate])

  return (
    <div className='container mt-3'>
        <h1>Login Page</h1>
<Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        onChange={(e)=>setEmail(e.target.value)}
        type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        onChange={(e)=>setPassword(e.target.value)}
        type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button><br /><br />
      
    </Form>
    <Button variant="danger" onClick={handleGoogle}>
        Login in with Google
      </Button>
    </div>
  )
}

export default Login