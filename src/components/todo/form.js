import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useForm from '../../hooks/form.js'
import {ListContext} from '../../context/listcon.js'

const Former = (props) => {

const [handleChange, handleSubmit] = useForm(props.handleSub)

// const listContext = useContext(ListContext)


// const toggler = async(id, call) => {

//   let flipper = val.filter((el) => el._id ===id)[0] ||{}

//   if (flipper._id){
//     flipper.complete = !flipper.complete;
//     await axios.put(`${url}/${id}`, flipper)
//       .then(res => {
//         const todos = res.data.results
//         console.log("toggled: ", todos)
//         call(todos)
//       }).catch(e => console.log(e))

//   }
//     console.log("TOGGLED: ", flipper)
// }
  return (

 <>
        <h1>Add To Do Item</h1>
        
        <Form>
          <Form.Group controlId="text">
            <Form.Label>To Do Item</Form.Label>
            <Form.Control
              type="text"
              name="text"
              placeholder="Item Details"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Assigned To</Form.Label>
            <Form.Control type="text" name="assignee" placeholder="Assignee Name" onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="difficulty">
            <Form.Label>Difficulty Rating</Form.Label>
            <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
          </Form.Group>
        </Form>
        <Button variant="primary" onClick={handleSubmit}>Add Item</Button>
      </>



  )
  };

  export default Former;