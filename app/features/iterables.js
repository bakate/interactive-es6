import React from 'react';

export default [
  {
    index: 1,
    title: 'for…of',
    content: (
      <div>
        <p>On a déjà vu, avec les générateurs, comment consommer manuellement un itérateur (méthode <code>next(…)</code>, recours aux propriétés <code>value</code> et <code>done</code> des valeurs renvoyées).  Toutefois, en pratique on consomme les objets itérables différemment :</p>
        <ul>
          <li>Avec <code>for…of</code></li>
          <li>Avec l’opérateur <em>spread</em> (<code>...</code>)</li>
          <li>Avec les constructeurs de <code>Map</code> et <code>Set</code></li>
          <li>Avec <code>Promise.all</code>, <code>Promise.race</code> et <code>Array.from</code></li>
          <li>Avec <code>yield*</code></li>
          <li>…</li>
        </ul>
        <p>Dans cet exercice, vous devez utiliser uniquement des <code>for…of</code> pour remplir <code>results</code> (à coup de <code>push</code>) à partir des itérables déclarés en début de code.  Les valeurs attendues à terme dans <code>results</code> sont listées plus bas dans <code>EXPECTED</code>.</p>
        <p>Astuce : les <em>template strings</em> vous seront fort utiles au début…</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Spread',
    content: (
      <div>
        <p>L’opérateur <em>rest/spread</em> (<code>...</code>) ne fonctionne pas que sur les tableaux ou, <a href="https://github.com/sebmarkbage/ecmascript-rest-spread#status-of-this-proposal">par future version du langage</a>, les objets quelconques.  Fondamentalement, il opère sur tout objet itérable.  Les tableaux sont, par défaut, itérabels sur leurs valeurs, dans l’ordre.  Mais plein d’autres choses sont itérables :</p>
        <ul>
          <li>Les <code>NodeList</code>s (résultat de <a href="#FIXME"><code>document.querySelectorAll</code></a> par exemple)</li>
          <li>Les <code>String</code>s (<em>codepoint</em> par <em>codepoint</em>)</li>
          <li>Les <code>Map</code>s et <code>Set</code>s</li>
          <li>Les générateurs</li>
          <li>…</li>
        </ul>
        <p>Dans cet exercice, récupérez tous les éléments <code>&lt;h4&gt;</code> de la page et transformez la <code>NodeList</code> obtenue en véritable tableau à l’aide d’un <em>spread</em> bien pensé, puis transformez la liste d’éléments ainsi obtenue en liste de leurs textes (chaque élément a une propriété <code>innerText</code> qui permet ça).</p>
        <p>Une expression suffit, pas besoin de structure de contrôle.</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Notre propre objet, itérable',
    content: (
      <div>
        <p>Sans attendre la future extension du langage (<em>“Rest/spread object properties”</em>), ou simplement parce qu’on veut implémenter une logique d’itération différente, il est possible de rendre n’importe quel objet compatible avec le protocole itérable, qu’il s’agisse d’un objet singleton ou de toutes les instances d’une classe.</p>
        <p>Il suffit que l’objet en question, ou la classe dont il est l’instance, implémente une méthode dont le nom est défini par le <strong>symbole prédéfini</strong> <code>Symbol.iterator</code>.  Appeler cette méthode doit renvoyer un objet qui est un itérateur valide :</p>
        <ol>
          <li>Il est doté d’une méthode <code>next()</code></li>
          <li>Cette méthode renvoie à chaque coup un objet doté d’une éventuelle propriété <code>value</code>, et d’une propriété obligatoire booléenne <code>done</code>.</li>
        </ol>
        <p>Dans cet exercice, nous avons un objet singleton doté d’une méthode <code>run(…)</code>.  Lorsqu’on appelle cette méthode, elle enregistre ses arguments dans la propriété <code>args</code> d’un objet ajouté à sa propriété « privée » <code>_runCalls</code>.</p>
        <p>Vous allez devoir ajouter le code d’une méthode qui rendra notre objet <code>recorder</code> itérable, de sorte que l’opérateur <em>spread</em> utilisé dessus dans le code de vérification marchera correctement.  L’itérateur renvoyé doit parcourir le champ <code>_runCalls</code> et renvoyer tour à tour chaque objet qui y est stocké.</p>
        <p>Conseils : inutile de recourir aux fonctions fléchées, mais prenez garde à l’évolution de <code>this</code> dans votre code : vous aurez sans doute besoin de sauver la référence à <code>this._runCalls</code> dans la <em>closure</em>.</p>
      </div>
    )
  }
]
