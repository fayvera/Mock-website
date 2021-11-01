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
        return(
            <div class={this.state.clicked ? "project-menu.active" : "not-active"}>
                <h2>{this.title}</h2>
            </div>
        )
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
                {/* <div class="open-menu">
                    <h2>{}</h2>
                </div> */}
            </div>
        )
    }

}

export default Project;