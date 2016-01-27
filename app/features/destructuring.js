import React from 'react';

export default [
  {
    index: 1,
    title: 'Tableaux',
    content: (
      <div>
        <p>Il est possible de déstructurer des tableaux en encadrant le récepteur de l'affectation ou de l'argument par des crochets, et en utilisant les virgules pour positionner.  Le <em>rest</em> (<code>...</code>) permet aussi de récupérer… le reste.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Objets',
    content: (
      <div>
        <p>Les objets sont déstructurables, même en profondeur, en encadrant le récepteur par des accolades, et en utilisant les noms de propriétés, quitte à les renommer avec une syntaxe à deux-points (<code>:</code>).</p>
      </div>
    )
  },
  {
    index: 3,
    title: '« Paramètres nommés »',
    content: (
      <div>
        <p>En exploitant la déstructuration d’objet sur un argument de fonction, on simule plutôt bien les paramètres nommés (<em>keyword parameters</em>)…</p>
      </div>
    )
  },
  {
    index: 4,
    title: 'Concat modifiant',
    content: (
      <div>
        <p>En exploitant <code>...</code> en tant que <em>spread</em>, on peut réaliser à la volée un « <code>concat</code> modifiant » sur un tableau A, en lui affixant un tableau B.</p>
      </div>
    )
  },
  {
    index: 5,
    title: 'Spread sur objet',
    content: (
      <div>
        <p>ES7 permet aussi d’utiliser <code>...</code> en tant que <em>spread</em> sur un litéral objet, ce qui permet de réaliser simplement des fonctions de type <code>Object.assign(…)</code> ou <code>_.extend(…)</code>.</p>
      </div>
    )
  }
]
