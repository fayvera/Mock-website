import React, { Component } from 'react' 
import { projects } from './portfolioItems'
import '../stylesheets/portfolio.css'


class Project extends Component{
    constructor(){
        super();
        this.state = {
            clicked: false
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            clicked: !this.state.clicked
        })
        debugger
    }

    render(){
        return(
            <div id="project-container">
                {projects.map((project, index) => {
                    return(
                        <div class="single-project-container" onClick={e => this.handleClick(e).bind(this)}>
                            <h2 class='project-title' key={index}>{project.title}</h2>
                            <h4>{project.description}</h4>
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Project;