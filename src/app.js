  
import React from 'react';

import ToDo from './components/todo/todo.js';
import ToDoC from './components/todo/todo-connected.js'
import Header from './components/todo/header.js'

function App() {  

  // const ToDo = require('./components/todo/todo.js')

  return (
      <>
        <Header />
        <ToDoC />
      </>
    );

}


export default App;