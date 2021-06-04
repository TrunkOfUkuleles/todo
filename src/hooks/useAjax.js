import React, { useState, useEffect } from 'react'

import axios from 'axios';

const useAjax = (place) => {
  const url = process.env.MONGO_URI
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

// useEffect(() => {
//     setIsLoading(true)
//     return axios.get(url)
//         .then(res=>{
//             const todos = res.data
//             setData(todos)
//             setIsLoading(false)
//         })

//   }, [])


  const adding = (e) =>{
    if (e) e.preventDefault();
        
     axios.post(place, {data})
        .then(res=>{
            const todos = res.data
            setData(todos)
        })
        return data
  }


return [adding, isLoading]
}
export default useAjax