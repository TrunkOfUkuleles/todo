import React, { useState } from 'react';

export const ListContext = React.createContext();

function ListProvider(props){

    const [list, setList] = useState([])

    const state ={
        list,
        setList
    }

    return(
        <ListContext value={state}>
            {props.children}
        </ListContext>
    )


}

export default ListProvider;