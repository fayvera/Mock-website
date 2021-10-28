import React, { Component } from 'react'
import { withRouter } from "react-router";
import '../stylesheets/portfolio.css'

class Portfolio extends Component{
    constructor(){
        super();
        this.state = {
            clicked: false
        }
    }   

    render(){
        return(
            <div className="main-portfolio-div">
                <h1>PORTFOLIO</h1>
            </div>
        )
    }
}

export default withRouter(Portfolio);