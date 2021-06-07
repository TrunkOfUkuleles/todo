import React, { useState, useContext } from 'react'
// import {ListContext} from '../context/listcon.js'
import axios from 'axios';
// import { NavItem } from 'react-bootstrap';


const useAjax = (val) => {
  const url = 'https://api-js401.herokuapp.com/api/v1/todo';
// const uri = process.env.REACT_APP_MONGO
  const [isLoading, setIsLoading] = useState(true)
//   const listContext = useContext(ListContext)


  const loader = async (call) =>{
    setIsLoading(true)
    // call([]);
    let wait;
    await axios.get(url)
        .then(res=>{
            const todos = res.data.results
            console.log("IN LOADING   : ", todos)
            setIsLoading(false)
            wait = todos
        })
        wait.map((el) => {
          console.log("LOAD INJECTION: ", el)
          call(arr => [...arr, el])
          })
  }

  const adding = async (chore, call) =>{
    setIsLoading(true)
    chore.due= new Date()
    chore.complete = false
    console.log("ADDING AJAX: ", chore)
     await axios.post(url, chore)
        .then(res=>{
            const todos = res.data.results
            console.log("IN ADDING   : ", res)
            call(arr => [...arr, chore])
        }).catch(e => console.log(e))
  }

  const toggler = async(id, call) => {

      let flipper = val.filter((el) => el._id ===id)[0] ||{}

      if (flipper._id){
        flipper.complete = !flipper.complete;
        await axios.put(`${url}/${id}`, flipper)
          .then(res => {
            const todos = res.data.results
            console.log("toggled: ", todos)
            call(todos)
          }).catch(e => console.log(e))

      }
        console.log("TOGGLED: ", flipper)
  }

  const deleter = async(id, call) => {
    console.log("DELETER: ", id, call)
      await axios.delete(`${url}/${id}`)
        .then(res =>{
            const todos = res.data
            console.log("DELETED", todos)
            call(todos)
        }).catch(e => console.log)

        console.log("DELETED")
  }


return [loader, adding, toggler, deleter, isLoading, setIsLoading ]
}
export default useAjax;