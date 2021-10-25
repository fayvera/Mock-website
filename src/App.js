// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/navbar'
import React from 'react';
import Home from './Home'
import About from './About/about'
import Portfolio from './Portfolio/portfolio'
import { Route, Switch } from 'react-router';

class App extends React.Component{
  render(){
    return( 
    <div className="App">
      <Navbar />
      <Switch>
          <Route path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/portfolio' component={Portfolio}/>
      </Switch>
    </div>
    )
  }
};

export default App;
