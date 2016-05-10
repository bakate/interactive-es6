import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class Promises extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="promises" />
        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/generators">Allons voir la prochaine génération…</Link>
        </div>
      </div>
    );
  }
}