import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Details() {
  const params = useParams();
  const firebase = useFirebase();

  const [data, setData] = useState(null);
  const [url, setUrl] = useState(null);
  const [qty, setQty] = useState(1);

  const placeOrder = () => {
    const result = firebase.placeOrder(params.bookId, qty);
  };

  useEffect(() => {
    firebase.getBookById(params.bookId).then((value) => setData(value.data()));
  }, []);

  useEffect(() => {
    if (data) {
      const imgurl = data.imgURL;
      firebase.getImgURL(imgurl).then((url) => setUrl(url));
    }
  }, [data]);

  if (data === null) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <img
        className="container "
        src={url}
        alt=""
        style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }}
      />
      <h2>Details</h2>
      <h3>{data.price}</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            onChange={(e) => setQty(e.target.value)}
            value={qty}
            type="number"
            />
        </Form.Group>
      <Button variant="success" onClick={placeOrder}>
        {" "}
        Buy Now
      </Button>
    </div>
  );
}

export default Details;
