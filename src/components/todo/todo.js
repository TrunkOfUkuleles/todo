import React, { useState, useEffect } from "react";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import "./_reset.scss";
import "./todo.scss";

const ToDo = () => {
  const [list, setList] = useState([]);
  // const TodoForm = require('./form.js')
  // const TodoList = require('./list.js')

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list2 = list.map((listItem) =>
        listItem._id === item._id ? item : listItem
      );
      console.log("toggle      ", list2, item)
      setList(list2);
    }
  };

  useEffect(() => {
    let list = [
      {
        _id: 1,
        complete: false,
        text: "Clean the Kitchen",
        difficulty: 3,
        assignee: "Person A",
      },
      {
        _id: 2,
        complete: false,
        text: "Do the Laundry",
        difficulty: 2,
        assignee: "Person A",
      },
      {
        _id: 3,
        complete: false,
        text: "Walk the Dog",
        difficulty: 4,
        assignee: "Person B",
      },
      {
        _id: 4,
        complete: true,
        text: "Do Homework",
        difficulty: 3,
        assignee: "Person C",
      },
      {
        _id: 5,
        complete: false,
        text: "Take a Nap",
        difficulty: 1,
        assignee: "Person B",
      },
    ];

    setList(list);
  }, []);

  return (
    <>
      <header bg="primary">
        <h2>
          To Do List Manager({list.filter((item) => !item.complete).length})
          Complete
        </h2>
      </header>

      <section className="todo">
        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList list={list} handleDelete={handleDelete} handleComplete={toggleComplete} />
        </div>
      </section>
    </>
  );
};


export default ToDo;