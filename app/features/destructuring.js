import React from 'react';

export default [
  {
    index: 1,
    title: 'Tableaux',
    content: (
      <div>
        <p>Il est possible de déstructurer des tableaux en encadrant le récepteur de l'affectation ou de l'argument par des crochets, et en utilisant les virgules pour positionner.</p>
        <p>Dans cet exercice, déstructurez correctement le tableau pour obtenir deux constantes <code>ES2015</code> et <code>ES2016</code> qui correspondent aux deuxième et troisième valeurs du tableau.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Tableaux toujours',
    content: (
      <div>
        <p>Le <em>rest</em> (<code>...</code>) permet aussi de récupérer… le reste.</p>
        <p>Déstructurez le tableau pour obtenir trois constantes : <code>winner</code> contiendra la première valeur du tableau, <code>runnerUp</code> la deuxième et <code>others</code> sera un tableau contenant tout le reste.</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Objets',
    content: (
      <div>
        <p>Les objets sont déstructurables, même en profondeur, en encadrant le récepteur par des accolades, et en utilisant les noms de propriétés, quitte à les renommer avec une syntaxe à deux-points (<code>:</code>).</p>
        <p>Cet exercice a besoin d’une déstructuration imbriquée pour affecter en une seule fois trois constantes : <code>first</code>, qui ira chercher <code>name.first</code> ; <code>lastName</code>, qui ira chercher <code>name.last</code> ; et enfin <code>nodeTraining</code>, qui ira chercher la deuxième valeur de <trainings>.</trainings></p>
      </div>
    )
  },
  {
    index: 4,
    title: '« Paramètres nommés »',
    content: (
      <div>
        <p>En exploitant la déstructuration d’objet sur un argument de fonction, on simule plutôt bien les paramètres nommés (<em>keyword parameters</em>)…</p>
        <p>Ici vous cherchez à définir trois paramètres nommés : <code>term</code>, qui est obligatoire ; <code>times</code>, qui vaut 1 par défaut ; et enfin <code>separator</code>, qui vaut <code>','</code> par défaut.</p>
      </div>
    )
  },
  {
    index: 5,
    title: 'Concat modifiant',
    content: (
      <div>
        <p>En exploitant <code>...</code> en tant que <em>spread</em>, on peut réaliser à la volée un « <code>concat</code> modifiant » sur un tableau A, en lui affixant un tableau B.</p>
        <p>Il s’agit en fait d’un copier-coller des diapos de la formation…</p>
      </div>
    )
  },
  {
    index: 6,
    title: 'Spread sur objet',
    content: (
      <div>
        <p>ES7 permet aussi d’utiliser <code>...</code> en tant que <em>spread</em> sur un litéral objet, ce qui permet de réaliser simplement des fonctions de type <code>Object.assign(…)</code> ou <code>_.extend(…)</code>.</p>
        <p>À l’aide de cette syntaxe, faites un <code>return</code> unique qui produit un objet dont le contenu démarre avec une copie d’<code>ORIGINAL</code>, la modifie sur base de son argument <code>overrides</code>, mais garantit en tout état de cause un champ <code>age</code> à 42.</p>
      </div>
    )
  }
]
