import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useFirebase } from '../context/Firebase';

function Cards(props) {
    const [url,setUrl] = useState(null);
    const firebase = useFirebase();
useEffect(()=>{

    

})

  return (
    <div className='container'>
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>   {props.name}</Card.Title>
        <Card.Text>
        Its price is {props.price} and shold by {props.displayName}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards