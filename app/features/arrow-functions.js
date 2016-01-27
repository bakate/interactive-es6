import React from 'react';

export default [
  {
    index: 1,
    title: 'Prédicats et filtres',
    content: (
      <div>
        <p>Les fonctions fléchées sont idéales pour simplifier les petites fonctions de rappel anonymes utilisées pour les prédicats et filtres.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Ayé, j’ai gardé mon this !',
    content: (
      <div>
        <p>Les fonctions fléchées ne s’approprient pas un certain nombre d’identifiants techniques, contrairement aux fonctions classiques (mot-clé <code>function</code>).  Du coup, par exemple, le <code>this</code> est lexical, comme n’importe qulle autre variable, ce qui est en général bien pratique…</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Attention aux autres identifiants lexicaux !',
    content: (
      <div>
        <p>Le souci, c’est que <code>this</code> n’est pas seul concerné : c'est aussi le cas de <code>arguments</code>, <code>super</code> et <code>new.target</code>.  Une fonction fléchée ne peut donc être <em>bound</em> (et ne peut donc être appelée avec <code>new</code>), ni traiter dynamiquement sa liste d’arguments.  Attention aux pièges !</p>
      </div>
    )
  }
]
