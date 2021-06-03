import React, {useState} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Former = (props) => {

const [item, setItem] = useState({})

const handleInputChange = e => {
    setItem( {...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({})
    
  };

  return (

 <>
        <h3>Add To Do Item</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="text">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control
              name="text"
              placeholder="Item Details"
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="difficulty">
            <Form.Label for="difficulty">Difficulty Rating</Form.Label>
            {/* <Form.Range /> */}
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={(e) => handleInputChange(e)} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={(e) => handleInputChange(e)} />
          </Form.Group>
          <Button variant="primary" type="submit">Add Item</Button>
        </Form>
      </>



  )
  };

  export default Former;