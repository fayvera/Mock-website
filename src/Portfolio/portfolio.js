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

    handleClick = (e) => {
        e.preventDefault()
        debugger
        debugger
        this.state.clicked === true ? this.setState({clicked: false}) : this.setState({clicked: true})
    }

    render(){
        return(
            <div class="main-portfolio-div">
                <h1>PORTFOLIO</h1>
                <div id="project-container">
                    {projects.map((project, index) => {
                        return(
                            <div class="single-project-container" onClick={e => this.handleClick(e)}>
                                <h2 class='project-title' key={index}>{project.title}</h2>
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
