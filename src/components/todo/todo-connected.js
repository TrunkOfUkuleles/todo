import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
// const todoAPI = 'http://localhost:3000/todo'


const ToDo = () => {

  const [list, setList] = useState([]);

  

  const _addItem = (item) => { 
    item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;

      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  };

  const _deleteTodo = id => {

    let url = `${todoAPI}/${id}`;
    fetch(url, {
      method: 'delete',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(savedItem => {
        setList(list.filter(listItem => listItem._id === id ? '' : listItem));
        console.log("deleted")
      })
      .catch(console.error);
  }

  // useEffect(() => {
  //   let list = [
  //     {
  //       _id: 1,
  //       complete: false,
  //       text: "Clean the Kitchen",
  //       difficulty: 3,
  //       assignee: "Person A",
  //     },
  //     {
  //       _id: 2,
  //       complete: false,
  //       text: "Do the Laundry",
  //       difficulty: 2,
  //       assignee: "Person A",
  //     },
  //     {
  //       _id: 3,
  //       complete: false,
  //       text: "Walk the Dog",
  //       difficulty: 4,
  //       assignee: "Person B",
  //     },
  //     {
  //       _id: 4,
  //       complete: true,
  //       text: "Do Homework",
  //       difficulty: 3,
  //       assignee: "Person C",
  //     },
  //     {
  //       _id: 5,
  //       complete: false,
  //       text: "Take a Nap",
  //       difficulty: 1,
  //       assignee: "Person B",
  //     },
  //   ];

  //   list.forEach(el => _addItem(el));
  // }, []);

  const _getTodoItems = () => {
    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);



  return (
    <>
     <header id="todo-title">
        <h1>
          To Do List Manager ({list.filter((item) => !item.complete).length})
        </h1>
      </header>

      <section className="todo">
        <div>
          <TodoForm handleSubmit={_addItem}/>
        </div>

        <div>
          <TodoList list={list} handleDelete={_deleteTodo} handleComplete={_toggleComplete} />
        </div>
      </section>
    </>
  );
};

export default ToDo;


// <header>
//         <h2>
//           There are {list.filter(item => !item.complete).length} Items To Complete
//         </h2>
//       </header>

//       <section className="todo">

//         <div>
//           <TodoForm handleSubmit={_addItem} />
//         </div>

//         <div>
//           <TodoList
//             list={list}
//             handleComplete={_toggleComplete}
//             handleDelete={_deleteTodo}
//           />
//         </div>
//       </section>