import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class ObjectsClasses extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="objects-classes" />
        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/destructuring">OK ! À présent, déstructurons un peu tout ça…</Link>
        </div>
      </div>
    );
  }
}
