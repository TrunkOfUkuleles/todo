import React from 'react';
import {HeavenlyContext} from '../../context/appcon.js'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import useForm from '../../hooks/form.js'
class Setting extends React.Component{

    appContext = useContext(HeavenlyContext)

     [handleChange, values] = useForm(this.setter)

    setter = (el) =>{
        this.appContext.setState(el)
    }

    render(){
       return (
        <Form>
          <Form.Group controlId="displayed">
            <Form.Label>Number of tasks displayed</Form.Label>
            <Form.Control
              name="displayed"
              value= {this.values.displayed}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="hide">
            <Form.Label>Hide completed tasks</Form.Label>
            <Form.Control
              name="hide"
              value= {this.values.hide}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="displayed">
            <Form.Label>Sort by: {this.values.sortype}</Form.Label>
            <Form.Control
              name="displayed"
              value= {this.values.sortype}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
    ) 
    }
    
}

export default Setting;