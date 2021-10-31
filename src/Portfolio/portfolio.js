import React, { Component } from 'react'
import { withRouter } from "react-router";
import '../stylesheets/portfolio.css'
import Project from './project'

class Portfolio extends Component{
    constructor(){
        super();
        this.state = {}
    }   

    render(){
        return(
            <div class="main-portfolio-div">
                <h1>PORTFOLIO</h1>
                <Project />
            </div>
        )
    }
}
export default withRouter(Portfolio);
