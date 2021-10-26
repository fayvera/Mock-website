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

    // handleClick = (e) => {
    //     e.preventDefault()
    //     // debugger
    //     this.setState({ path: e.target.href })
    // }

    // handleMenu = () => {
    //     items.map((item, index) => {
    //         return(
    //             <src key={index} onClick={e => this.handleClick(e)}>
    //                 <Link classname={item.cname} to={item.url}>
    //                     {item.title}
    //                 </Link>
    //             </src>
    //         )
    //     })
    // }


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


export default Navbar;


