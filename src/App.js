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

    const DocsPage = (props) => {
      return (
        <Docs
        />
      );
    };

    const BitboxCliPage = (props) => {
      return (
        <BitboxCli
        />
      );
    };

    return (
      <Router>
        <div>
          <div className="header">
            <div className="home-menu main-menu pure-menu pure-menu-horizontal pure-menu-fixed">
              <Link className="pure-menu-heading header-logo" to="/">
                <img src={'/assets/logo.png'} /> <br />BitBox
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/test" component={Test}/>
            <Route exact path="/" component={Homepage}/>
            <Redirect from='*' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
