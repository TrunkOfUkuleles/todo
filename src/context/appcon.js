
import React from 'react';

export const HeavenlyContext = React.createContext();

class AppProvider extends React.Component{
constructor(props){
    super(props);
    this.state = {
        displayed: 3,
        hide: false,
        sortype: 'due'
    }
}
    render() {

        return (
            <HeavenlyContext.Provider value={this.state}>
                {this.props.children}
            </HeavenlyContext.Provider>
        )
    }


}

export default AppProvider;