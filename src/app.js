  
import React from 'react';

import ToDo from './components/todo/todo.js';
import ToDoC from './components/todo/todo-connected.js';
import Header from './components/todo/header.js';
import HeavenlyContext from './context/appcon.js';
import ListContext from './context/listcon.js';

function App() {  

  // const ToDo = require('./components/todo/todo.js')

  return (
      <>
      <HeavenlyContext>
        <ListContext>
          <Header />
          <ToDoC />
        </ListContext>
      </HeavenlyContext>

      </>
    );

}


export default App;