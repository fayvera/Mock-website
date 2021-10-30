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
            <div class="main-portfolio-div">
                <h1>PORTFOLIO</h1>
                <div id="project-container">
                    Here will be all the projects
                </div>
            </div>
        )
    }
}

export default withRouter(Portfolio);