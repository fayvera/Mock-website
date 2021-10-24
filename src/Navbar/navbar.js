import React, {Component} from 'react';
import './navbar.css'


class Navbar extends Component{ 


    render(){
        return(
            <nav class="navbar">
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Logout</h1>
            </nav>
        )
    }
}

export default Navbar;


