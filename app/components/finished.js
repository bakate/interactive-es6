import React from 'react';

export default class Finished extends React.Component {
  render() {
    return (
      <div>
        <h2>T’as tout fini ! Tu déchires.</h2>
        <p>Tu veux fouiller plus loin ? Y’a un <strong>super bouquin</strong> : <a href="http://exploringjs.com/" target="_blank">Exploring ES6</a>, gratuit en ligne.</p>
        <p>Tu as aussi l’excellent <a href="http://es6katas.org/" target="_blank">ES6 Katas</a>, pour pratiquer point à point.</p>
        <p>Ce système dérive de Interactive ES6, proposé par <a href="http://twitter.com/Jack_Franklin" target="_blank">Jack Franklin</a> de <a href="http://javascriptplayground.com/" target="_blank">JavaScript Playground</a>.</p>
      </div>
    );
  }
}
