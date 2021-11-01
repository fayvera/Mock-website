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
                <h1>Skills</h1>
                <p class="about-me">
                    <h3>Ruby </h3>
                    <h3>Ruby on Rails</h3>
                    <h3>JavaScript</h3>    
                    <h3>React</h3>
                    <h3>Redux</h3>
                    <h3>HTML</h3>
                    <h3>CSS</h3>
                    <h3>SQLite3</h3>                     
                </p>    
                <br/>
                <h1>Soft Skills</h1>
                <p class="about-me">
                    <h3>Standards-Driven</h3>
                    <h3>Great Communitcator</h3>
                    <h3>Goal-Oriented</h3>
                </p>
            </div>
        )
    }
}


export default withRouter(About);