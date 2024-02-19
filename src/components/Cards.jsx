import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
import { useFirebase } from '../context/Firebase';

function Cards(props) {
    const [url,setUrl] = useState(null);
    const firebase = useFirebase();
useEffect(()=>{

  firebase.getImgURL(props.imgURL)
  .then((url)=>setUrl(url));

  
    

})

  return (
    
    
 <Card style={{ width: '18rem', margin:"15px" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>   {props.name}</Card.Title>
        <Card.Text>
        Its price is {props.price} and shold by {props.displayName}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 
 
  )
}

export default Cards