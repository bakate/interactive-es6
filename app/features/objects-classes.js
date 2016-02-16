import React from 'react';

export default [
  {
    index: 1,
    title: 'Méthodes sur les litéraux objets',
    content: (
      <div>
        <p>Les litéraux objets disposent maintenant de syntaxes raccourcies pour les méthodes.</p>
        <p>Utilisez cette syntaxe pour créer facilement un objet <code>roiDeLaClasse</code> dont les propriétés <code>first</code> et <code>last</code> ont pour valeurs les variables homonymes. Ajoutez une méthode <code>fullName</code> qui renvoie une <code>String</code> contenant le prénom, une espace et le nom.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Constructeurs et méthodes sur les classes',
    content: (
      <div>
        <p>Les corps de classes aussi disposent maintenant de syntaxes raccourcies pour les méthodes, ainsi que d'une syntaxe officielle pour le constructeur.</p>
        <p>Utilisez la syntaxe <code>constructor</code> pour permettre l’înitialisation des champs <code>first</code> et <code>last</code> des instances de <code>Person</code> lors de l’instanciation, et ajoutez une méthode <code>fullName</code> indentique à celle de l’exercice précédent.</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Accesseurs',
    content: (
      <div>
        <p>On a aussi une syntaxe raccourcie pour les accesseurs lecteurs (<em>getters</em>) et écrivains (<em>setters</em>).</p>
        <p>Ajoutez à l’object <code>roiDeLaClasse</code> un accesseur lecteur <code>fullName</code> qui renvoie la même valeur composée que pour les méthodes <code>fullName()</code> des exercices précédents.  Écrivez par ailleurs un accesseur écrivain <code>fullName</code> qui, lorsqu’on lui affecte une valeur de nom complet, la découpe pour mettre à jour les champs <code>first</code> et <code>last</code> en fonction (astuce : utilisez la méthode <code>split(…)</code> de <code>String</code>)</p>
      </div>
    )
  },
  {
    index: 4,
    title: 'Appels « super »',
    content: (
      <div>
        <p>Il devient par ailleurs facile d'appeler la version héritée du constructeur, et celle d'une méthode quelconque.  Une contrainte existe toutefois sur l'appel hérité au sein du constructeur.</p>
        <p>Dans cet exercice, vous aurez besoin de recourir intelligemment à <code>super</code> pour appeler le constructeur hérité dans celui de <code>Geek</code>, ainsi que pour calculer la valeur de retour de la version spécialisée de <code>greet()</code> en vous complétant celle renvoyée par la version héritée de la méthode.</p>
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
      </div>
    )
  }
]
