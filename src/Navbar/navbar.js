import React, {Component} from 'react';
import './navbar.css'
import {items} from './nav_Items'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { withRouter } from "react-router";


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
                    <a href="/">HOME</a>
                    <a href='/about'>ABOUT</a>
                    <a href='/portfolio'>PORTFOLIO</a>
                </div>
                <div class="navbar-items">
                    {this.handleMenu}
                    {items.map((item, index) =>{
                        return(
                            <src key={index} onClick={this.handleClick}>
                            <Link classname={item.cname} to={item.url}>
                                {item.picture}
                            </Link>
                        </src>
                        )
                    }
                    )}
                </div>
            </nav>
        )
    }
}

export default withRouter(connect(null)(Navbar));


