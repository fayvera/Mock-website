import React, { Component } from 'react';
import { withRouter } from 'react-router';
import '../stylesheets/about.css'
// import {connect} from 'react-redux'
// import { withRouter } from "react-router";

class About extends Component{

    constructor(){
        super();
        this.state = {
            // clicked: false
        }
    }

    render(){
        return(
            <div className="main-about-div">
                <h1>About Me!</h1>
                <p id="about-me">
                    <h3>Ruby </h3>
                        <h3>Ruby on Rails</h3>
                    <h3>React</h3>
                    <h3>Redux</h3>
                    <h3>HTML</h3>
                    <h3>CSS</h3>                     
                </p>    
            </div>
        )
    }
}


export default withRouter(About);