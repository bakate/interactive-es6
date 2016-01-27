import React from 'react';

export default class ExpectedResult extends React.Component {
  render() {
    if (!this.props.results) return null;

    return (
      <div>
        <p>Les assertions en fin de code décrivent ce que l’exercice attend.</p>
        <p>Modifiez le code qui les précède pour les faire passer.</p>
        <p>Quand vous êtes prêt-e à tester votre code, utilisez le bouton « Évaluer ».</p>
        <pre><code>
          { JSON.stringify(this.props.results, null, 2) }
        </code></pre>
      </div>
    )
  }
}
