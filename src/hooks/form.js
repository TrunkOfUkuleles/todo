import { useState, useContext } from 'react';
// import {ListContext} from '../context/listcon.js'


// our custom hook has the "use" convention attached -> you MUST stick to this
const useForm = (action) => {

  // setup some ability to collect values from our form as it's being updated / submitted
  const [values, setValues] = useState({});

  // const listContext = useContext(ListContext)
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    action(values);
  }

  const handleChange = (e) => {
    setValues(values => ({...values, [e.target.name]: e.target.value }));
  }


  return [
    handleSubmit,
    handleChange,
    values
  ]
}

export default useForm;