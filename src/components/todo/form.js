import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../../hooks/form.js'
import {ListContext} from '../../context/listcon.js'

const Former = (props) => {

const [handleChange, values] = useForm(setting)

const listContext = useContext(ListContext)


  function setting(el){
    listContext.changeList(el)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   props.handleSubmit(item);
  //   setItem({})
    
  // };

  return (

 <>
        <h1>Add To Do Item</h1>
        
        <Form>
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
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange } />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" onClick={(e) =>{props.handleSubmit(e)}}>Add Item</Button>
        </Form>
      </>



  )
  };

  export default Former;