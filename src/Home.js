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

            </div>
        )
    }
}
export default Home;