import React from 'react';

export default [
  {
    index: 1,
    title: 'L’interpolation dans la joie',
    content: (
      <div>
        <p>Finis les `+` entre les segments !  On a désormais les chaînes template, à délimiteurs backticks (<code>`</code>), qui autorisent la syntaxe d’interpolation <code>{'${…}'}</code>.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Le multi-lignes',
    content: (
      <div>
        <p>Finis aussi, les backslashes (<code>\</code>) en fin de ligne pour faire des chaînes multi-lignes, mal prises en charge qui plus est !  Pas besoin non plus de chaînes multiples se terminant par <code>\n</code> et regroupées par des <code>+</code> : les chaînes template sont multi-lignes par défaut (et préservent l’indentation).</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Les tagged template strings',
    content: (
      <div>
        <p>La vraie puissance de cette fonctionnalité, c'est le mode <em>tagged</em> : on peut créer des fonctions conçues spécifiquement pour retraiter une interpolation à la volée, et utiliser ce nom de fonction comme <em>tag</em> juste avant le backtick (<code>`</code>) ouvrant.  Les possibilités sont infinies !</p>
      </div>
    )
  }
]
