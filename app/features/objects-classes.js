import React from 'react';

export default [
  {
    index: 1,
    title: 'Méthodes sur les littéraux objets',
    content: (
      <div>
        <p>Les littéraux objets disposent maintenant de syntaxes raccourcies pour les méthodes.</p>
        <p>Utilisez cette syntaxe pour créer facilement un objet <code>roiDeLaClasse</code> dont les propriétés <code>first</code> et <code>last</code> ont pour valeurs les variables homonymes. Ajoutez une méthode <code>fullName</code> qui renvoie une <code>String</code> contenant le prénom, une espace et le nom.</p>
        <p>N’oubliez pas que dans un littéral objet, les couples clé/valeur sont séparés les uns des autres par des virgules.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Constructeurs et méthodes sur les classes',
    content: (
      <div>
        <p>Les corps de classes aussi disposent maintenant de syntaxes raccourcies pour les méthodes, ainsi que d'une syntaxe officielle pour le constructeur.</p>
        <p>Utilisez la syntaxe <code>constructor</code> pour permettre l’initialisation des champs <code>first</code> et <code>last</code> des instances de <code>Person</code> lors de l’instanciation, et ajoutez une méthode <code>fullName</code> identique à celle de l’exercice précédent.</p>
        <p>Attention : dans le corps d’une classe ES6, il n’y a pas de virgules entre les membres, contrairement à ce qui se passe dans un littéral objet.</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Accesseurs',
    content: (
      <div>
        <p>On a aussi une syntaxe raccourcie pour les accesseurs lecteurs (<em>getters</em>) et écrivains (<em>setters</em>).</p>
        <p>Ajoutez à l’objet <code>roiDeLaClasse</code> un accesseur lecteur <code>fullName</code> qui renvoie la même valeur composée que pour les méthodes <code>fullName()</code> des exercices précédents.  Écrivez par ailleurs un accesseur écrivain <code>fullName</code> qui, lorsqu’on lui affecte une valeur de nom complet, la découpe pour mettre à jour les champs <code>first</code> et <code>last</code> en fonction (astuce : utilisez la méthode <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/split" target="_blank"><code>split(…)</code></a> de <code>String</code>)</p>
      </div>
    )
  },
  {
    index: 4,
    title: 'Appels « super »',
    content: (
      <div>
        <p>Il devient par ailleurs facile d'appeler la version héritée du constructeur, et celle d'une méthode quelconque.  Une contrainte existe toutefois sur l'appel hérité au sein du constructeur.</p>
        <p>Dans cet exercice, vous aurez besoin de recourir intelligemment à <code>super</code> pour appeler le constructeur hérité dans celui de <code>Geek</code>, avant d’y ajouter vos initialisations propres (pour votre champ <code>nick</code>).</p>
        <p>Vous aurez aussi recours à <code>super</code>, mais dans une autre syntaxe, pour calculer la valeur de retour de votre méthode <code>greet()</code> en vous basant sur celle renvoyée par la version héritée (qui vient de <code>Person</code>), et en y ajoutant « Je suis » suivi d’une espace, de votre champ <code>nick</code> et d’un point final.</p>
      </div>
    )
  },
  {
    index: 5,
    title: 'Propriétés calculées',
    content: (
      <div>
        <p>Enfin, définir à la volée une propriété calculée n’a jamais été aussi facile…</p>
        <p>Utilisez la syntaxe de propriété calculée (à base de crochets) pour définir à la volée deux propriétés aux noms (et valeurs) dynamiques dans les objets renvoyés par <code>makeObject</code>.</p>
        <p>La première propriété dynamique a exactement le nom et la valeur fournis par les arguments passés à la fonction.</p>
        <p>La seconde propriété dynamique a pour nom celui passé en premier argument, préfixé par un <em>underscore</em> (<code>_</code>), et comme valeur celle passée en deuxième argument, préfixée par <code>'Private '</code> (notez l’espace à la fin).</p>
      </div>
    )
  }
]
