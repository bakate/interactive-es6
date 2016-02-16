import React from 'react';

export default [
  {
    index: 1,
    title: 'L’interpolation dans la joie',
    content: (
      <div>
        <p>Finis les `+` entre les segments !  On a désormais les chaînes template, à délimiteurs backticks (<code>`</code>), qui autorisent la syntaxe d’interpolation <code>{'${…}'}</code>.</p>
        <p>Utilisez cette syntaxe pour produire, à partir des constantes déjà en place, le texte indiqué plus bas.  N’oubliez pas le point final, et attention au calcul de l’âge affiché !</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Le multi-lignes',
    content: (
      <div>
        <p>Finis aussi, les backslashes (<code>\</code>) en fin de ligne pour faire des chaînes multi-lignes, mal prises en charge qui plus est !  Pas besoin non plus de chaînes multiples se terminant par <code>\n</code> et regroupées par des <code>+</code> : les chaînes template sont multi-lignes par défaut (et préservent l’indentation).</p>
        <p>Définissez un texte multi-ligne avec les bons retours chariots et espacements, conformément à celui testé plus bas.  Attention, les retours chariots de début et de fin de chaîne seront comptabilisés si vous en mettez.</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Les tagged template strings',
    content: (
      <div>
        <p>La vraie puissance de cette fonctionnalité, c'est le mode <em>tagged</em> : on peut créer des fonctions conçues spécifiquement pour retraiter une interpolation à la volée, et utiliser ce nom de fonction comme <em>tag</em> juste avant le backtick (<code>`</code>) ouvrant.  Les possibilités sont infinies !</p>
        <p>Dans cet exercice, écrivez une fonction <code>bracketize</code> qui transforme la chaîne résultat en entourant chaque partie interpolée par des crochets.</p>
        <p>Reprenez les diapos sur cette fonctionnalité pour un rappel des arguments transmis à votre fonction de traitement, et de la syntaxe usuelle pour les « consommer ».  Si vous avez un doute sur le fonctionnement de <code>reduce</code>, <a href="https://developer.mozilla.org/fr/docs/JavaScript/Reference/Objets_Globaux/Array/Reduce" target="_blank">en voici la documentation</a>.</p>
      </div>
    )
  },
  {
    index: 4,
    title: 'Les TTS, version brutale',
    content: (
      <div>
        <p>Le boss de fin de niveau : faites un tagger qui échappe les 5 caractères spéciaux XML (&lt;, &gt;, &amp;, &quot; et &apos;)</p>
        <p>Nous vous fournissons la base d’une petite fonction d’assistance pour remplacer les caractères problématiques au sein d’un texte, que vous pouvez compléter pour les autres entités, et utiliser au sein de la fonction <code>html</code>.</p>
      </div>
    )
  }
]
