import React, {Component} from 'react';
import './navbar.css'
import {items} from './nav_Items'
import { Link } from "react-router-dom";


class Navbar extends Component{ 
    constructor(){
        super();
        this.state = {
            clicked: false
        }
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    handleMenu = () => {
        items.map((item, index) => {
            return(
                <src key={index} onClick={this.handleClick}>
                    <Link classname={item.cname} to={item.url}>
                        {item.title}
                    </Link>
                </src>
            )
        })
    }


    render(){
        return(
            <nav class="navbar">
                <div class="navbar-main">
                    <a href="/">Home</a>
                    <a href='/about'>About</a>
                    <a href='/portfolio'>Portfolio</a>
                    <a href="/contact">Contact</a>
                </div>
                <div class="navbar-items">
                    {this.handleMenu()}
                </div>
            </nav>
        )
    }
}

export default Navbar;


