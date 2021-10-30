import React, { Component } from 'react'
import { withRouter } from "react-router";
import '../stylesheets/portfolio.css'
import { projects } from './portfolioItems'

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
                    {projects.map((project, index) => {
                        return(
                            <div class="single-project-container">
                                <h3 class='project-title' key={index}>{project.title}</h3>
                                <h4>{project.description}</h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(Portfolio);