import React from 'react';

export default [
  {
    index: 1,
    title: 'Prédicats et filtres',
    content: (
      <div>
        <p>Les fonctions fléchées sont idéales pour simplifier les petites fonctions de rappel anonymes utilisées pour les prédicats et filtres.</p>
        <p>Cet exercice nécessite deux fonctions fléchées : une comme transformateur pour l’appel à <code>map</code> ligne 8, qui doit mettre son argument en majuscules, et le préfixer par un indice (démarrant à 1), un point et une espace.  Attention, vous n’avez pas le droit à un compteur extérieur : regardez plutôt la <a href="https://developer.mozilla.org/fr/docs/JavaScript/Reference/Objets_Globaux/Array/Map" target="_blank">documentation de <code>map</code></a>.</p>
        <p>La seconde est un prédicat passé à <code>filter</code> dans le code de <code>filterNamesAtLeast</code>, et utilise la valeur de <code>minLength</code> passée dans la <em>closure</em> comme base de filtrage pour son argument : elle ne renvoie <code>true</code> que si l’argument est d’une longueur suffisante.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Ayé, j’ai gardé mon this !',
    content: (
      <div>
        <p>Les fonctions fléchées ne s’approprient pas un certain nombre d’identifiants techniques, contrairement aux fonctions classiques (mot-clé <code>function</code>).  Du coup, par exemple, le <code>this</code> est lexical, comme n’importe qulle autre variable, ce qui est en général bien pratique…</p>
        <p>Dans cet exercice, vous devez écrire un prédicat de filtre qui ne laisse passer que les contributions dont le champ <code>author</code> a une valeur présente dans le champ <code>biasedTowards</code> de l’objet courant (<code>BDFL</code>).</p>
        <p>Si vous passiez une fonction traditionnelle (une expression de fonction utilisant le mot-clé <code>function</code>) comme prédicat à <code>filter</code>, vous n’auriez pas le bon <code>this</code> associé, et ne pourriez donc pas consulter directement <code>this.biasedTowards</code>.  Mais avec une fonction fléchée, le <code>this</code> lexical est laissé tranquille, et donc ça marche !</p>
      </div>
    )
  }
]
