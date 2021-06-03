import React from 'react';
// import {Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'

class Header extends React.Component{

    render(){
       return (
        <Navbar bg="primary">
                <ul>
                    <li> 
                        <div>Home</div>
                    </li>
                </ul>
        </Navbar>
    ) 
    }
    
}

export default Header;