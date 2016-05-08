import React from 'react';

export default [
  {
    index: 1,
    title: 'Consommation & then',
    content: (
      <div>
        <p>Lorsqu’une API nous renvoie une promesse, on peut utiliser la méthode <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/then"><code>then</code></a> de celle-ci pour traiter la valeur résultat lorsque la promesse s’accomplit.  On peut décider de renvoyer une valeur depuis la fonction de rappel fournie à <code>then</code>, auquel cas on obtient une promesse dérivée qui s’accomplit avec cette valeur.</p>
        <p>Dans cet exercice, utilisez l’API navigateur <a href="https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch#Créer_une_requête_fetch" target="_blank"><code>fetch</code></a> pour récupérer une URL et renvoyer la propriété <code>status</code> de la réponse obtenue.  Vous ferez cela au sein d’une fonction prédéclarée <code>getAndStatus</code>.</p>
      </div>
    )
  },
  {
    index: 2,
    title: 'Chaînage des traitements',
    content: (
      <div>
        <p>Un rappel de traitement transmis à <code>then</code> peut lui-même renvoyer une promesse, laquelle s’incruste en quelque sorte dans la chaîne des traitements ainsi définie.</p>
        <p>Les réponses fournies par <code>fetch</code> disposent de méthodes de décodage du corps de la réponse, qui renvoient des promesses de contenu décodé.  Une de ces méthodes est <code>json()</code>, qui s’accomplit avec l’objet désérialisé depuis le corps de réponse JSON.</p>
        <p>Utilisez-la dans un premier maillon de <code>then</code>, puis ajoutez un deuxième pour récupérer l’objet résultat et produire un texte de nom + e-mail selon le format visible dans les assertions de test.</p>
        <p>Astuces : pensez à la déstructuration des arguments et aux <em>template strings</em> pour le deuxième <code>then</code>.</p>
      </div>
    )
  },
  {
    index: 3,
    title: 'Attrape !',
    content: (
      <div>
        <p>Lorsqu’une exception est levée au sein d’un gestionnaire de promesse (accomplissement ou rejet), elle est automatiquement capturée par la promesse.  Il faut prendre soin de toujours terminer nos chaînes de promesses par un appel <code>.catch</code> grâce auquel on traitera l’erreur éventuelle, afin d’éviter le risque d’une erreur silencieuse.</p>
        <p>Dans cet exercice, écrivez une fonction qui <em>fetche</em> l’URL qu’on lui passe et renvoie une promesse qui s’accomplit avec le JSON de réponse ou, en cas d’erreur, s’accomplira plutôt avec le message de l’erreur. (Dans la vraie vie, vous laisseriez probablement le code appelant traiter l’erreur comme il l’entend).</p>
        <p>Astuce : tout comme avec la structure <code>try…catch</code>, le fait de fournir un gestionnaire <code>.catch</code> à une chaîne de promesses « avale » l’exception en cours, la neutralise.  Mais qui plus est, si le gestionnaire renvoie une valeur, la chaîne de promesses s’accomplit avec celle-ci, comme pour un gestionnaire d’accomplissement.</p>
      </div>
    )
  },
  {
    index: 4,
    title: 'Construis toi-même ta promesse',
    content: (
      <div>
        <p>On crée ses propres promesses au moyen du <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise">constructeur <code>Promise</code></a>, auquel on passe une fonction chargée de réaliser le traitement asynchrone sous-jacent.  Cette fonction reçoit en arguments deux fonctions internes à la promesse : une pour l’accomplissement, une pour le rejet. (On parle de <em>revealing constructor pattern</em>.)</p>
        <p>Utilisez cette syntaxe pour créer une fonction <code>getEventualValue</code> qui, en ayant reçu en arguments un délai (en millisecondes) et une valeur, renvoie une promesse qui s’accomplit avec cette valeur au terme du délai.</p>
        <p>Astuce : <code>setTimeout</code> est votre ami.</p>
      </div>
    )
  },
  {
    index: 5,
    title: 'Quand y’en a pour un, y’en a pour trois',
    content: (
      <div>
        <p>Une des grandes forces des promesses réside dans leur <strong>composabilité</strong> : il est facile de produire de nouvelles promesses à partir de promesses existantes.  Il est notamment facile de produire une promesse en combinant plusieurs autres, ce qui permet de paralléliser les traitements tout en attendant qu’ils aient tous abouti.</p>
        <p>Pour cet exercice, vous allez écrire une fonction qui reçoit en arguments un nombre quelconque d’IDs utilisateurs.  Pour chaque ID, vous ferez une requête <code>fetch</code> sur l’URL API de cet utilisateur (<tt>http://jsonplaceholder.typicode.com/users/1</tt> pour l’ID 1, par exemple). Mais ne faites pas ces requêtes en séquence : parallélisez-les.</p>
        <p>Produisez une promesse combinée des résultats, à l’aide de <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/all"><code>Promise.all</code></a>, qui prend un tableau de promesses en argument et renvoie une promesse qui s’accomplira avec comme valeur le tableau des résultats (dans le bon ordre).  Dérivez alors les contenus JSON de chaque réponse, puis extrayez le champ <code>email</code> de chaque contenu.</p>
        <p>Votre fonction renvoie une promesse qui s’accomplit avec comme résultat le tableau des e-mails des utilisateurs dont les IDs ont été fournis.</p>
        <p>Astuce : <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map"><code>Array#map</code></a> est votre amie…</p>
      </div>
    )
  }
]
