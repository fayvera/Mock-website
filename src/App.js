// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/navbar'
import React from 'react';

class App extends React.Component{
  render(){
    return( 
    <div className="App">
      <Navbar />
        <h2>Hello World</h2>
    </div>
    )
  }
};

export default App;
