import React, { Component } from 'react' 
import { projects } from './portfolioItems'


class Project extends Component{
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
        )
    }

}

export default Project;