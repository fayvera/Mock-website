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
                    <div class="single-project-container">
                        <h3 class="project-title">Brewery Locator</h3>
                        <h4>Brewery Locator where users can search beer-related establishments by location.</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Portfolio);