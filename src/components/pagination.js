import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

const PageMe = (props) => {

    let items = [];


       const paging = () =>{

        for (let i = 1; i<=props.testy; i++){
            items.push(
                <Pagination.Item key={i} active={i === props.acti} onClick={props.setActi(i)}>
                  {i}
                </Pagination.Item>,
              );
            }

        }
    
         paging();       


    return(
        <div>
            <Pagination>
          {items}
            </Pagination>
        </div>

    )
}

export default PageMe