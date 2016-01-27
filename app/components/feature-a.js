import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class FeatureA extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="feature-a" />
        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/finished">Ready to move on? It’s over!</Link>
        </div>
      </div>
    );
  }
}
