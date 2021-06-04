  
import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDoC from './components/todo/todo-connected.js';
import Header from './components/todo/header.js';
import AppProvider from './context/appcon.js';
import ListProvider from './context/listcon.js';

function App() {  

  // const ToDo = require('./components/todo/todo.js')

  return (
      <>
      <AppProvider>
        <ListProvider>
          <>
          <Header />
          <ToDoC />
          </>
        </ListProvider>
      </AppProvider>

      </>
    );

}


export default App;