import './css/bootstrap.min.css!';
import 'npm:codemirror@5.8.0/lib/codemirror.css!';
import 'npm:codemirror@5.8.0/theme/monokai.css!';
import './css/overrides.css!';
import 'fetch'

import store from 'store';

import $ from 'jquery'
import 'bootstrap/js/tooltip'

import 'npm:codemirror@5.8.0/mode/javascript/javascript';

import { render } from 'react-dom';
import React from 'react';
import { Router, Route, Link } from 'react-router';

import FEATURES from './features/index';
import Index from './components/index';

import Username from './components/username';
import Dashboard from './components/dashboard';

import Finished from './components/finished';

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

    return FEATURES.map(({ key, title, tooltip }) => {
      if (tooltip) {
        return <li key={key} title={tooltip} data-toggle="tooltip" data-placement="bottom"><Link to={`/${key}`}>{title}</Link></li>;
      }

      return <li key={key}><Link to={`/${key}`}>{title}</Link></li>;
    });
  }

  componentDidMount () {
    $('li[data-toggle="tooltip"]').tooltip()
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
              <a className="navbar-brand" href="#">ES2015+ @ JS Attitude</a>
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
          {
            FEATURES.map(feat => {
              return <Route key={feat.key} path={`/${feat.key}`} component={feat.component}></Route>
            })
          }
          <Route path="/finished" component={Finished}></Route>
          <Route path="/_dashboard" component={Dashboard}></Route>
        </Route>
      </Router>
    )
  }
}

render(<ForceReRender />, document.getElementById('app'));
