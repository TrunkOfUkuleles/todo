import React, { useEffect, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
// import HeavenlyContext from '../../context/appcon.js'
import {ListContext} from '../../context/listcon.js'
import useAjax from '../../hooks/useAjax.js'
const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
// const todoAPI = 'http://localhost:3000/todo'


function ToDo() {

  // const [list, setList] = useState([]);
  // const appContext = useContext(HeavenlyContext)
  const listContext = useContext(ListContext)
  const [adding, loader, isLoading] = useAjax()

  function setter(el){
    listContext.changeList((list) => [...list, el])
    console.log("Setter ", listContext.list)
  }

  // const _addItem = (item) => { 
  //   item.due = new Date();
  //   fetch(todoAPI, {
  //     method: 'post',
  //     mode: 'cors',
  //     cache: 'no-cache',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(item)
  //   })
  //     .then(response => response.json())
  //     .then(savedItem => {
  //       setList([...list, savedItem])
  //     })
  //     .catch(console.error);
  // };

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
        setList(list.filter(listItem => listItem._id !== id ));
        console.log("deleted")
      })
      .catch(console.error);
  }

  useEffect(() => {
    loader(setter)
  }, []);

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
          To Do List Manager ({listContext.list.length})
        </h1>
      </header>

      <section className="todo">
        <div>
          <TodoForm handleSubmit={adding}/>
        </div>

        <div>
          <TodoList list={listContext.list} loading={isLoading} handleDelete={_deleteTodo} handleComplete={_toggleComplete} />
        </div>
      </section>
    </>
  );
};

export default ToDo;

// {listContext.list.filter((item) => !item.complete).length || 0}