import React from 'react';

const ASSERTION_ERROR_MAPS = {
  'equal': (x, y) => {
    return (
      <span>Je m’attendais à {valueOrUndefined(y)} et j’ai {valueOrUndefined(x)}</span>
    )
  },
  'resolvesTo': (_, y) => {
    return (
      <span>La promesse devrait s’accomplir avec {valueOrUndefined(y)}</span>
    )
  },
  'method missing': (err) => {
    const target = err.message.split(' ')[0]
    return (
      <span>Je cherchais la fonction <code>{target}</code></span>
    )
  }
};

function valueOrUndefined(x) {
  return (<code>{x == undefined ? 'undefined' : x}</code>);
}

const SOURCES = {
  true: ['Trop fort !', '\\o/', 'Tu roxxes !', 'Legit!', 'Righteous!', 'BG™', 'Joliii…', 'Bon ça…'],
  false: ['Dommage', 'Argh !', 'Oops…', 'Damned!', 'Et m…', 'Sapristi !', 'Disgrâce !']
}

function randomReaction(passed) {
  const source = SOURCES[passed]
  return source[Math.floor(Math.random() * source.length)]
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
          { randomReaction(result.passed === true) }
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
