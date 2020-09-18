import React, { Component } from 'react';
import './styles/css/index.css';

export default class App extends Component {
  render() {
    return (
      <div className="App theme-settings helvetica normal light-theme">
          <main id="main"/>
          <footer id="footer"/>
          <nav id="nav"/>
          <nav id="secondary-nav"/>
      </div>
    );
  }
}
