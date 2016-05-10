import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class Generators extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="generators" />
        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/iterables">On itère un coup ?</Link>
        </div>
      </div>
    );
  }
}
