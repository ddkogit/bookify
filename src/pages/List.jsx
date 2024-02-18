import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from "../context/Firebase";

function List() {
  const firebase = useFirebase();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [num, setNum] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await firebase.handleCreateNewListing(name, num, price, img);
  };
  return (
    <div className="container mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter book name"
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Book Number</Form.Label>
          <Form.Control
            value={num}
            onChange={(e) => setNum(e.target.value)}
            type="number"
            placeholder="Enter number"
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="text"
            placeholder="Enter price of book"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            onChange={(e) => setImg(e.target.files[0])}
            type="file"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Book
        </Button>
        <br />
        <br />
      </Form>
    </div>
  );
}

export default List;
