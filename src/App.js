import React, { Component } from 'react';
import logo from './logo.svg';
import Picture from './headerNav/Picture';
import Navbar from './headerNav/Navbar';
import Name from './headerNav/Name';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-flex-wrapper">
          <Picture />
          <Name />
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
