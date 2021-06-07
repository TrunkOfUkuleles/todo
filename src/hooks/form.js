import { useState, useContext } from 'react';
// import {ListContext} from '../context/listcon.js'
// import useAjax from './useAjax.js';

// our custom hook has the "use" convention attached -> you MUST stick to this
const useForm = (call) => {

  // setup some ability to collect values from our form as it's being updated / submitted
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    e.persist();
    setValues(val => ({...val, [e.target.name]: e.target.value }));
    console.log("CHANGING VALUES", values)
  }

  const handleSubmit = (e) => {
    if (e){
      e.preventDefault();
      
    }
    call(values)
    console.log("HANDLESUBMIT: ", call, values)

  }
  return [
    handleChange,
    handleSubmit,
    values
  ]
}

export default useForm;