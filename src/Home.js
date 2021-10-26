import React, { Component } from 'react';
import { withRouter } from "react-router";


class Home extends Component{
    constructor(){
        super();
        this.state = {
            // clicked: false
        }
    }

    render(){
        return (
            <div class='main-home-div'>
                <div id="location">
                    <h1>SOFTWARE ENGINEER</h1>
                    <h4>NEW YORK, NY</h4>
                </div>
                <div class="greeting">
                    <h1>HEY!</h1>
                    <br/><br/>
                    <h1>I'M <span id="intro"> FAY VERA</span></h1>
                </div>
            </div>
        )
    }
}
export default withRouter(Home);