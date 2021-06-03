import React, {useState} from 'react';
import useAjax from '../../hooks/useAjax.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../../hooks/form.js'

const Former = (props) => {
  const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
const [item, setItem] = useState({})
const [  handleChange] = useForm(setting)
// const [adding] = useAjax(todoAPI)
// const handleInputChange = e => {
//     setItem( {...item, [e.target.name]: e.target.value });
//   };

  function setting(el){
    setItem(el)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    setItem({})
    
  };

  return (

 <>
        <h1>Add To Do Item</h1>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="text">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control
              name="text"
              placeholder="Item Details"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="difficulty">
            <Form.Label for="difficulty">Difficulty Rating</Form.Label>
            {/* <Form.Range /> */}
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">Add Item</Button>
        </Form>
      </>



  )
  };

  export default Former;