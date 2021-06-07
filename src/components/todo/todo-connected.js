import React, { useEffect, useContext, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import {HeavenlyContext} from '../../context/appcon.js'
import {ListContext} from '../../context/listcon.js'
import useAjax from '../../hooks/useAjax.js'
import PageMe from '../pagination.js'
// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
// const todoAPI = 'http://localhost:3000/todo'


function ToDo() {
  const appCon = useContext(HeavenlyContext)
  const listContext = useContext(ListContext)
  const [adding, loader, isLoading, toggler, deleter] = useAjax(listContext.list)
  const [working, setWorking] = useState([{}])
  const [active, setActive] = useState(1)
  const [pageSet, setPageSet] = useState([])

  useEffect(() => {
    loader(listContext.changeList)
console.log("effect used:", listContext.list)
 }, [])

 useEffect(() => {
  filter(listContext.list);
  console.log("FILTER EFFECT: ", listContext.list, )
 }, [listContext.list])

  function filter(arr){
    
    let theWorks = arr.sort((a,b) => b[appCon.sortype] - a[appCon.sortype])
    if(appCon.hide){return setWorking(theWorks.filter(el => !el.complete))}
    setWorking(theWorks)
    console.log('filtering: ', working, theWorks)
  }

  useEffect(()=>{
    setPageSet(working.slice(((active-1)*appCon.displayed), (((active-1)*appCon.displayed)+appCon.displayed)))
  }, [active, working])

  const _delete = async(id) =>{
    await deleter(id, (res) => {listContext.changeList(res)})
  }

  const _add = async(el) => {
    console.log("ADD: ", el)
    await adding(el, (res)=> {listContext.changeList(arr => [...arr, res])})
  }

  const _tog = async(id) =>{
    await toggler(id, (res) => {listContext.changeList(res)})
  }



  return (
    <>
     <header id="todo-title">
        <h1>
          To Do List Manager ({working.length})
        </h1>
      </header>

      <section className="todo">
        <div>
          <TodoForm handleSubmit={_add}/>
        </div>

        <div>
          <TodoList list={pageSet} loading={isLoading} handleDelete={_delete} handleComplete={_tog} />
          <PageMe working = {working} displayed={appCon.displayed} acti={active} setActi={setActive} testy={Math.ceil(working.length/appCon.displayed)} />
        </div>
      </section>
    </>
  );
};

export default ToDo;

// {listContext.list.filter((item) => !item.complete).length || 0}