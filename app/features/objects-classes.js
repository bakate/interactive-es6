import React from 'react';

export default [
  {
    index: 1,
    title: 'Constructeurs et méthodes',
    content: (
      <div>
        <p>Les litéraux objets et corps de classes disposent maintenant de syntaxes raccourcies pour les méthodes, ainsi que d'une syntaxe officielle pour le constructeur.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Accesseurs',
    content: (
      <div>
        <p>On a aussi une syntaxe raccourcie pour les accesseurs lecteurs (<em>getters</em>) et écrivains (<em>setters</em>).</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Appels « super »',
    content: (
      <div>
        <p>Il devient par ailleurs facile d'appeler la version héritée du constructeur, et celle d'une méthode quelconque.  Une contrainte existe toutefois sur l'appel hérité au sein du constructeur.</p>
      </div>
    )
  },
  {
    index: 4,
    title: 'Propriétés calculées',
    content: (
      <div>
        <p>Enfin, définir à la volée une propriété calculée n’a jamais été aussi facile…</p>
      </div>
    )
  }
]
