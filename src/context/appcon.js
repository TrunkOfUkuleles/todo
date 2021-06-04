
import React, { useState } from 'react';

export const HeavenlyContext = React.createContext();

function AppProvider(props){
    const [displayed, setDisplayed] = useState(3);
    const [sorting, setSorting] = useState('norm');
    const [hide, setHide] = useState(true);

    const state = {
        displayed, 
        sorting,
        hide,
        displayNum: setDisplayed,
        sortType: setSorting,
        hider: setHide
    }

    return (
        <HeavenlyContext.Provider value={state}>
            {props.children}
        </HeavenlyContext.Provider>
    )


}

export default AppProvider;