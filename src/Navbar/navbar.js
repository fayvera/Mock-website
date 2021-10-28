import React, {Component} from 'react';
import './navbar.css'
import {items, pages} from './nav_Items'
import { Link } from "react-router-dom";
// import {connect} from 'react-redux'
// import { withRouter } from "react-router";




class Navbar extends Component{ 
    constructor(){
        super();
        this.state = {}
    }


    render(){
        return(
            <nav class="navbar">
                <div class="navbar-main" >
                    {pages.map((page, index) => {
                        return(
                            <src key={index} >
                                <Link className={page.cname} to={page.url}>
                                    {page.title}
                                </Link>
                            </src>
                        )
                    })
                    }
                </div>
                <div class="navbar-items">
                    {items.map((item, index) =>{
                        return(
                            <src key={index} >
                            <Link classname={item.cname} onClick={(e) => {
                                e.preventDefault()
                                window.open(item.url)
                                }
                            }>
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


export default Navbar;


