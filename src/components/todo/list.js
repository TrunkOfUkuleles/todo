import React, {useContext} from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import {ListContext} from '../../context/listcon.js'
import './todo.scss';


const List = (props) => {

  const listContext = useContext(ListContext)

  return (
    <>
      {props.list.map((item) => (
        <Card className={`complete-${item.complete}`} key={item._id}>
  
 <Card.Body onClick={() => props.handleComplete(item._id)}>

    <Card.Title>{item.complete 
    ? <Badge  className=" badge badge-pill badge-success ml-2">Completed</Badge>  : <Badge  className="badge badge-pill badge-danger ml-2">Pending</Badge> } {item.assignee}</Card.Title>

    <Card.Text>
    {item.text} 
    </Card.Text>
  </Card.Body>
  <Button style={{"text-align": "right", "min-width":"33%"}} onClick={() => props.handleDelete(item._id)}>Done</Button>
  <Card.Footer className="text-muted" style={{"text-align": "right"  }}>Difficulty: {item.difficulty}</Card.Footer>
</Card>
      ))}
          </>
  );
};





export default List;


