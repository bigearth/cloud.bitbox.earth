import React, { Component } from 'react';


import {
  Link
} from 'react-router-dom';

import {
  Route
} from 'react-router-dom';

class Test extends Component {
  componentDidMount() {
    document.title = "Test - BITBOX by EARTH - Supercharge your Bitcoin Cash workflow";
  }

  render() {
    return (
      <div className="BitboxPaper">
        <h2 className="content-head is-center"><i className="fas fa-folder" /> Test</h2>
        <div className="pure-g">
          <div className="pure-u-1-1">
          <p>
            <button className="pure-button pure-button-primary">
              <i className="fas fa-long-arrow-alt-up"></i> Up
            </button>
          </p>

          <p>
            <button className="pure-button pure-button-primary">
              <i className="fas fa-long-arrow-alt-down"></i> Down
            </button>
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
