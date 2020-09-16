import React, { Component } from 'react';
import './styles/css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App theme-settings helvetica normal light-theme">
          <main>
              <section className="section">
                  <div className="section-content">
                    <div className="grid">
                        <div className="column">
                            <div id="content">
                                {/*"router outlet" content goes here*/}
                            </div>
                        </div>
                    </div>
                  </div>
              </section>
          </main>
          <footer id="footer"/>
          <nav id="nav"/>
          <nav id="secondary-nav"/>
      </div>
    );
  }
}

export default App;
