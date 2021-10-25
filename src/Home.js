import React, { Component } from 'react';



class Home extends Component{
    constructor(){
        super();
        this.state = {
            clicked: false
        }
    }

    render(){
        return (
            <div class='main-home-div'>
                <h1>HEY!</h1>

                <h1>I'M <span id="intro"> FAY VERA</span></h1>

                <h1>SOFTWARE ENGINEER</h1>
                <h2>NEW YORK, NY</h2>
            </div>
        )
    }
}
export default Home;