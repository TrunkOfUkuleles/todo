  
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import ToDo from './components/todo/todo.js';
import ToDoC from './components/todo/todo-connected.js';
import Header from './components/todo/header.js';
import AppProvider from './context/appcon.js';
import ListProvider from './context/listcon.js';

function App() {  

  // const ToDo = require('./components/todo/todo.js')

  return (
      <>
      <BrowserRouter>
      <AppProvider>
        <ListProvider>
          <>
          <Header />
          <ToDoC />
          </>
        </ListProvider>
      </AppProvider>
      </BrowserRouter>

      </>
    );

}


export default App;