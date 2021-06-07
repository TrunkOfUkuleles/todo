import React, { useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination'

const PageMe = (props) => {

    let items = [];

    useEffect(()=>{
      paging()
    }, [props.acti])       

       const paging = () =>{
        console.log("PAGINATE ME", props.testy)
        for (let i = 1; i < props.testy; i++){
            items.push(
                <Pagination.Item key={i} active={i === props.acti} onClick={props.setActi({i})}>
                  {i}
                </Pagination.Item>,
              );
            }
            console.log("PAGINATED ONECE: ", items)
        }
    


    return(

            <Pagination>
          {items}
            </Pagination>
    )
}

export default PageMe