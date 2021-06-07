import React, { useEffect } from 'react';
import PageItem, { Ellipsis } from 'react-bootstrap/PageItem'
import Pagination from 'react-bootstrap/Pagination'

const PageMe = (props) => {

    let items = [];

    useEffect(()=>{
      paging()
    }, [])       

       const paging = () =>{
        console.log("PAGINATE ME", props.displayed)
        for (let i = 1; i <= props.displayed; i++){
              console.log("FOR LOOP", i, items)
                // items.push((<Pagination.Item key={i} active={i === props.acti} onClick={props.setActi({i})}>
                //   {i}
                // </Pagination.Item>))
              items.push(i)
            }

        }
    


    return(
            <Pagination>
              <Pagination.Item key={1} active={1 === props.acti} onClick={e => props.setActi(e, 1)}>
                {1}
              </Pagination.Item>
              <Pagination.Item key={2} active={2 === props.acti} onClick={e => props.setActi(e, 2)}>
                {2}
              </Pagination.Item>
              <Pagination.Item key={3} active={3 === props.acti} onClick={e => props.setActi(e, 3)}>
                {3}
              </Pagination.Item>
          
            </Pagination>
    )
}

export default PageMe

// {items.forEach((el)=>{
//             return (
//               <Pagination.Item key={el} active={el === props.acti} onClick={props.setActi({el})}>
//                   {el}
//                 </Pagination.Item>
//             )
//           })}