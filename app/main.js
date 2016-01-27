import './css/bootstrap.min.css!';
import 'npm:codemirror@5.8.0/lib/codemirror.css!';
import 'npm:codemirror@5.8.0/theme/monokai.css!';
import './css/overrides.css!';
import 'fetch'

import store from 'store';

import 'npm:codemirror@5.8.0/mode/javascript/javascript';

import { render } from 'react-dom';
import React from 'react';
import { Router, Route, Link } from 'react-router';

import Index from './components/index';

import ObjectsClasses from './components/objects-classes';
import Destructuring from './components/destructuring';

import Username from './components/username';
import Dashboard from './components/dashboard';

import Finished from './components/finished';

const FEATURES = {
  'objects-classes': 'Objets & Classes',
  'destructuring': 'Déstructuration'
}

const titleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

const hasEnteredName = () => !!store.get('username');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hasName: hasEnteredName() };
  }

  challengeLinks() {
    if (!this.state.hasName) {
      return null;
    }

    return ['objects-classes', 'destructuring'].map((feat) => {
        return <li key={feat}><Link to={`/${feat}`}>{FEATURES[feat] || titleCase(feat)}</Link></li>;
      });
  }

  reset(e) {
    store.clear();
    // purposeful refresh such that all challenges get reloaded from the fixtures
    setTimeout(() => window.location.reload());
  }

  nameSet() {
    this.setState({ hasName: true });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Pratiquer ES6 @ JS Total</a>
            </div>

            <Username nameSetCallback={() => this.nameSet()} />

            <div>
              <ul className="nav navbar-nav">
                { this.challengeLinks() }
              </ul>
            </div>

            <form className="navbar-form navbar-left">
              <button className="btn btn-default" onClick={(e) => this.reset(e) }>Repartir à zéro</button>
            </form>

          </div>
        </nav>
        <div className="container">
          { this.props.children }
        </div>
      </div>
    )
  }
}

class ForceReRender extends React.Component {
  componentWillMount() {
    // to work with jspm-live-reload
    this.forceUpdate();
  }

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="" component={App}>
          <Route path="/" component={Index}></Route>
          <Route path="/_dashboard" component={Dashboard}></Route>
          <Route path="/objects-classes" component={ObjectsClasses}></Route>
          <Route path="/destructuring" component={Destructuring}></Route>
          <Route path="/finished" component={Finished}></Route>
        </Route>
      </Router>
    )
  }
}

render(<ForceReRender />, document.getElementById('app'));
