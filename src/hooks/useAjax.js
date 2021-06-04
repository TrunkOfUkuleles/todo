import React, { useState, useContext } from 'react'
// import {ListContext} from '../context/listcon.js'
import axios from 'axios';


const useAjax = (call) => {
  const url = 'https://api-js401.herokuapp.com/api/v1/todo';

  const [isLoading, setIsLoading] = useState(false)
//   const listContext = useContext(ListContext)


  const loader = async (callback) =>{
    setIsLoading(true)
    axios.get(url)
        .then(res=>{
            const todos = res.data.results
            console.log("IN LOADING   : ", todos)
            todos.map((td) => {
                console.log("LOADING FOREACH", td)
                callback(td)})
            // console.log("IN LOADER : ", listContext)
            setIsLoading(false)
        })
  }

  const adding = async (e, target) =>{
      console.log("adding ajax :", target)
    if (e) e.preventDefault();
    setIsLoading(true)
     axios.post(url, {target})
        .then(res=>{
            const todos = res.data.results
            console.log("IN ADDING   : ", todos)
            callback(todos)
            setIsLoading(false)
        })
  }


return [adding, loader, isLoading]
}
export default useAjax