import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Jokes from './components/jokes';
import Signup from "./components/signup";
import Signin from "./components/signin";

class App extends Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    }
  }
  render() {
    return (
      <div className="App">
      <Route path='/jokes' component={Jokes}/>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      </div>
    );
  }
}

export default App;
