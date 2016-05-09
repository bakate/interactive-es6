import React from 'react';

export default [
  {
    index: 1,
    title: '3 petits tours et puis s’en vont…',
    content: (
      <div>
        <p>Une fonction générative est déclarée avec <code>function*</code>, et renvoie implicitement un générateur, sur lequel on appelle ensuite la méthode standard d’un itérateur : <code>next(…)</code>.  Celle-ci renvoie un objet résultat porteur d’une propriété <code>value</code> (résultat du dernier <code>yield</code> en date dans la fonction) et d’une autre propriété <code>done</code>, qui n’est à <code>true</code> que lorsque la fonction a terminé son code.</p>
        <p>Pour cet exercice, écrivez le corps de la fonction générative de façon à faire passer les tests.  Attention : c’est <strong>très très simple</strong>, alors ne cherchez pas midi à 14 heures…</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Conversation 1 (next/yield)',
    content: (
      <div>
        <p>Un générateur n’est pas juste destiné à faire <code>yield</code> sur des valeurs que le code exploitant consomme : c’est une conversation, avec de l’info qui passe dans les deux sens.</p>
        <p>Le premier mode de conversation, c’est que le <code>yield</code> au sein de la fonction générative <em>renvoie une valeur</em> : celle passée par le code exploitant lors de son prochain appel à <code>next(…)</code>.  À défaut, on a classiquement <code>undefined</code>.</p>
        <p>Écrivez le corps de la fonction générative de façon à ce qu’elle <code>yield</code> d’abord la valeur <code>start</code> qui lui est passée, mais multiplie ensuite celle-ci par le résultat du <code>yield</code>, et ce autant de fois que nécessaire pour faire passer le code de vérification.</p>
        <p>Ne cherchez pas un truc hyper compliqué, c’est juste une série de <code>yield</code> intelligemment foutus…</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Conversation 2 (return)',
    content: (
      <div>
        <p>On peut également demander à un générateur de terminer ses travaux en faisant un <code>return</code> précis (qui aura alors lieu comme s’il était placé à l’endroit du <code>yield</code> actuellement en suspension).  C’est grâce à la méthode <code>return</code> du générateur.</p>
        <p>Mais ce n’est pas là notre objectif : on va juste vérifier que lorsque la fonction générative fait un <code>return</code> de façon classique, on obtient bien un résultat de <code>next(…)</code> avec une propriété <code>done</code> à <code>true</code>.</p>
        <p>Écrivez le corps de la fonction générative pour qu’elle boucle sur <code>yield</code> jusqu’à ce que <code>value</code> soit 42, auquel cas elle <code>return</code> cette valeur. Attention : ça pourrait être 42 d’entrée de jeu…</p>
        <p>La solution est simple, ne cherchez pas un code emberlificoté avec des tas de cas particuliers.</p>
      </div>
    )
  },
  {
    index: 4,
    title: 'Conversation 3 (throw/try/catch)',
    content: (
      <div>
        <p>Tout comme le code exploitant peut demander à la fonction générative de court-circuiter son code avec un <code>return</code>, il peut lui demander de lever une exception avec un appel à la méthode <code>throw</code> du générateur.</p>
        <p>Si la fonction générative a un <code>try…catch</code> en place autour du <code>yield</code> concerné, celui-ci capturera l’exception normalement.</p>
        <p>Pour cet exercice, faites à nouveau une boucle de <code>yield</code> (pas besoin de leur coller des valeurs), mais enrobez-la dans un <code>try…catch</code> et, si une exception survient, renvoyez simplement la valeur de sa propriété <code>message</code>.</p>
      </div>
    )
  },
  {
    index: 5,
    title: 'Délégation officielle',
    content: (
      <div>
        <p>Un aspect particulièrement intéressant des générateurs est qu’ils <strong>composent bien</strong> : un générateur peut déléguer tout ou partie de sa propre itération à un autre générateur, ou à tout autre itérable, en fait, tels que les tableaux, maps, ensembles, chaînes de caractères, listes de nœuds DOM…</p>
        <p>Pour cela, une fonction générative utilise, à la place d’un <code>yield</code> classique, un <code>yield*</code> (notez l’astérisque) sur le délégué.</p>
        <p>Dans cet exercice, la fonction générative reçoit en arguments un nombre quelconque d’itérables, auxquels elle doit déléguer successivement sa propre itération.</p>
      </div>
    )
  }
]
