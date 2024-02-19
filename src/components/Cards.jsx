import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/Card'
import { useFirebase } from '../context/Firebase';
import {useNavigate} from "react-router-dom"

function Cards(props) {
    const [url,setUrl] = useState(null);
    const firebase = useFirebase();

  const navigate = useNavigate();

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
        <Button variant="primary"
        onClick={e=>navigate(`/book/view/${props.id}`)}>View Details</Button>
      </Card.Body>
    </Card>
 
 
  )
}

export default Cards