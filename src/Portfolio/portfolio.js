import React, { Component } from 'react'

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

export default Portfolio