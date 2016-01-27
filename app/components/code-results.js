import React from 'react';

const ASSERTION_ERROR_MAPS = {
  'equal': (x, y) => {
    return (
      <span>Je m’attendais à {valueOrUndefined(y)} plutôt qu’à {valueOrUndefined(x)}</span>
    )
  },
  'resolvesTo': (_, y) => {
    return (
      <span>La promesse aurait dû s’accomplir avec {valueOrUndefined(y)}</span>
    )
  },
  'method missing': (err) => {
    const target = err.message.split(' ')[0]
    return (
      <span>Je n’ai pas trouvé la fonction <code>{target}</code></span>
    )
  }
};

function valueOrUndefined(x) {
  return (<code>{x == undefined ? 'undefined' : x}</code>);
}

function resultToString(result) {
  return ASSERTION_ERROR_MAPS[result.assertion].apply(null, result.args);
}

export default class CodeResults extends React.Component {
  renderResult(result) {
    const cssClass = 'list-group-item list-group-item-' + (result.passed ? 'success' : 'danger');

    const [actual, expected] = result.args;

    return (
      <li key={JSON.stringify(result)} className={cssClass}>
        { resultToString(result) }
        <span className="badge">
          { result.passed === true ? 'Trop fort ! ' : 'Dommage ! ' }
        </span>
      </li>
    )
  }
  renderResults() {
    return this.props.results.map(this.renderResult.bind(this));
  }
  render() {
    if (!this.props.results) return null;

    return <ul className="list-group">{ this.renderResults() }</ul>
  }
}
