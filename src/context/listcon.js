import React, { useState } from 'react';

export const ListContext = React.createContext();

function ListProvider(props){

    const [list, setList] = useState([])

    const state ={
        list,
        changeList: setList 
    }

    return(
        <ListContext.Provider value={state}>
            {props.children}
        </ListContext.Provider>
    )


}

export default ListProvider;