import React from 'react';
import {Link , NavLink} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

class Header extends React.Component{

    render(){
       return (
        <Navbar bg="primary">
                <ul>
                    <li> 
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <NavLink to="/settings">Settings</NavLink>
                    </li>
                </ul>
        </Navbar>
    ) 
    }
    
}

export default Header;