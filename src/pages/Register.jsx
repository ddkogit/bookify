import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();


  const firebase = useFirebase();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit = async (e)=>{
    e.preventDefault();
    await firebase.createUser(email,password);
  }

  useEffect(()=>{
    if(firebase.isLoggedIn) navigate("/");

  },[firebase,navigate])

  return (
    <div className='container mt-3'>
      <h1>Register Page</h1>
<Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        onChange={(e)=>setEmail(e.target.value)}
        type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        onChange={(e)=>setPassword(e.target.value)}
        type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Register