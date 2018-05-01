// react imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';

// custom components
import Test from './components/Test';
import Homepage from './components/Homepage';

// css
import './styles/app.scss';

class App extends Component {

  handlePathMatch(path) {
    if(path === '/' || path === '/blocks' || path === '/transactions' || path === '/logs' || path === '/configuration/accounts-and-keys') {
      return true;
    } else {
      return false;
    }
  }

  render() {

    const pathMatch = (match, location) => {
      if (!match) {
        return false
      }
      return this.handlePathMatch(match.path);
    }

    const BitboxCliPage = (props) => {
      return (
        <BitboxCli
        />
      );
    };

    return (
      <Router>
        <div>
          <div className="pure-menu pure-menu-horizontal">
            <Link className="pure-menu-heading header-logo" to="/">
              <img src='https://www.bitbox.earth/assets/logo.png' /> <br />BitBox
            </Link>
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="https://www.bitbox.earth" className="pure-menu-link">Docs</a></li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="https://market.bitbox.earth">
                  Market
                </a>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
