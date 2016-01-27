import React from 'react';

import { Link } from 'react-router';

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>Bienvenue sur cet atelier de pratique ES6</h2>
        <p>Tu participes à l’édition 2016 de la formation <a href="http://www.js-attitude.fr/js-total/" target="_blank">JS Total</a> par Delicious Insights, et c’est bien !</p>
        <p>Au fil de la première journée, tu vas pouvoir pratiquer les concepts et fonctionnalités présentés ici.</p>
        <p>La première fois, pense à entrer ton p’tit nom (identifiable par le formateur) dans le champ tout en haut…</p>
      </div>
    );
  }
}
