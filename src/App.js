// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/navbar'
import React from 'react';
import Home from './Home'

class App extends React.Component{
  render(){
    return( 
    <div className="App">
      <Navbar />
      <Home />
      
    </div>
    )
  }
};

export default App;
