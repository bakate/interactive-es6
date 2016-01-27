import React from 'react';

import Feature from './feature';

import { Link } from 'react-router';

export default class Destructuring extends React.Component {
  render() {
    return (
      <div className="challenge row">
        <Feature feature="destructuring" />
        <div className="col-md-12">
          <Link className="btn btn-primary btn-lg btn-block" to= "/template-strings">Allez, c’est l’heure de triturer tes strings…</Link>
        </div>
      </div>
    );
  }
}
