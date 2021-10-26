import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from "react-router";

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
            </div>
        )
    }
}

export default withRouter(connect(null)(About));