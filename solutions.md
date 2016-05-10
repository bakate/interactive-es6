# Solutions aux exercices de l’[ESLab](http://eslab.js-attitude.fr/)

## POO (Objets & Classes)

### Méthodes sur les littéraux objets

```js
const roiDeLaClasse = {
  first, last,

  fullName () {
    return this.first + ' ' + this.last // Avant d’avoir vu TS
    return `${this.first} ${this.last}` // Après avoir vu TS
  }
}
```

### Constructeurs et méthodes sur les classes

```js
class Person {
  constructor (first, last) {
    this.first = first
    this.last = last
  }

  fullName () {
    return this.first + ' ' + this.last // Avant d’avoir vu TS
    return `${this.first} ${this.last}` // Après avoir vu TS
  }
}
```

### Accesseurs

```js
const roiDeLaClasse = {
  first: 'Georges',
  last: 'Abitbol',

  get fullName () {
    return `${this.first} ${this.last}`
  },

  set fullName (value) {
    // Avant d’avoir vu déstruct.
    const names = value.split(' ')
    this.first = names[0]
    this.last = names[1]

    // Après avoir vu déstruct.
    [this.first, this.last] = value.split(' ')
  }
}
```

### Appels « super »

```js
class Geek extends Person {
  constructor (first, last, nick) {
    super(first, last)
    this.nick = nick
  }

  greet (whom) {
    return `${super.greet(whom)} Je suis ${this.nick}.`
  }
}
```

### Propriétés calculées

```js
function makeObject(customProp, customValue) {
  return {
    type: 'custom',
    createdAt: Date.now(),
    [customProp]: customValue,
    [`_${customProp}`]: `Private ${customValue}`
  }
}
```

## Déstruct. (déstructuration)

### Tableaux

```js
const [, ES2015, ES2016] = ['Elm', 'ES6', 'ES7', 'Go', 'Haskell', 'Ruby']
```

### Tableaux toujours

```js
const [winner, runnerUp, ...others] = ['Alice', 'Bob', 'Claire', 'Dave']
```

### Objets

```js
const {
  name: { first, last: lastName },
  trainings: [, nodeTraining]
} = nostromo
```

### « Paramètres nommés »

```js
function repeat({ term, times = 1, separator = ',' }) {
  // …
}
```

### Concat modifiant

```js
const newLength = arr1.push(...arr2)
```

### Spread sur objet

```js
function derive(overrides) {
  return { ...ORIGINAL, ...overrides, age: 42 }
}
```

## Templates (Template Strings)

### L’interpolation dans la joie

```js
const message = `Il y a un an, ${first} ${last} avait ${age - 1} ans.`
```

### Le multi-lignes

```js
const markup = `<ul>
  <li>Un</li>
  <li>Deux</li>
</ul>`
```

### Les tagged template strings

```js
function bracketize(statics, ...exprs) {
  return statics.reduce(function(acc, text, index) {
    return acc + text + (index >= exprs.length ? '' : `[${exprs[index]}]`)
  }, '')
}
```

### Les TTS, version brutale

```js
function html(statics, ...exprs) {
  return statics.reduce(function(acc, text, index) {
    return acc + text + escapeString(exprs[index] || '')
  }, '')
}

// === Fonctions d'aide ===

function escapeString(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
}
```

(À noter que la version plus « production » de `escapeString` ressemblerait plutôt à ça :)

```js
// Tout en haut, avant la TTS pour éviter la TDZ :

const MAP = {
  '&': 'amp', '<': 'lt', '>': 'gt', "'": 'apos', '"': 'quot'
}

// Puis en fonction d’aide :

function escapeString(text) {
  return text.replace(/[&<>'"]/g, (char) => `&${MAP[char]};`)
}
```

## Fx fléchées (fonctions fléchées)

### Prédicats et filtres

```js
const prefixedUpperNames = people.map(
  (name, index) => `${index + 1}. ${name.toUpperCase()}`
)

function filterNamesAtLeast(minLength) {
  return people.filter(
    (name) => name.length >= minLength
    // Variations fun :
    // • (name) => minLength <= name.length
    // • ({ length }) => minLength <= length
  )
}
```

### Ayé, j’ai gardé mon this !

```js
processContributions(contribs) {
  return contribs.filter(
    ({ author }) => this.biasedTowards.indexOf(author) !== -1
  )
}
```

## Promesses

### Consommation & then

```js
function getAndStatus (url) {
  return fetch(url).then(({ status }) => status)
}
```

### Chaînage des traitements

```js
function getUserFormattedEmail (url) {
  return fetch(url)
    .then((res) => res.json())
    .then(({ name, email }) => `${name} <${email}>`) 
}
```

### Attrape !

```js
function fetchWithShield (url) {
  return fetch(url)
    .then((res) => res.json())
    .catch(({ message }) => message)
}
```

### Construis toi-même ta promesse

```js
function getEventualValue (delay, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), delay)
  })
}
```

### Quand y’en a pour un, y’en a pour trois

```js
return Promise.all(
    ids.map(
      (id) => fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
    )
  )
  .then((users) => users.map(({ email }) => email).join(' / '))
```

## Générateurs

### 3 petits tours et puis s’en vont…

```js
function* wannTouTri () {
  yield 1
  yield 2
  yield 3
}
```

### Conversation 1 (next/yield)

```js
function* whatSayYou (start) {
  start *= yield start
  start *= yield start
  yield start
}
```

### Conversion 2 (return)

```js
function* nowOrLater (value) {
  while (value !== 42) {
    value = yield value
  }
  return value
}
```

### Conversation 3 (throw/try/catch)

```js
function* untilThen () {
  try {
    while (true) {
      yield
    }
  } catch ({ message }) {
    return message
  }
}
```

### Délégation officielle

```js
function* weAreLegion (...fawkes) {
  for (const guy of fawkes) {
    yield* guy
  }
}
```

Note : un `fawkes.forEach` ne marcherait pas car on introduirait une nouvelle fonction (fléchée ou non), qui n’est pas la générative sollicitée, et donc au sein de laquelle faire un `yield*` serait soit inopérant, soit invalide.

## Itérables

### for…of

```js
for (const [index, name] of NAMES.entries()) {
  results.push(`${index + 1}. ${name}`)
}
for (const [lang, score] of LANGS) {
  results.push(`${lang} = ${score}`)
}
for (const type of TYPES) {
  results.push(type)
}

// Bonus pour celles et ceux qui pensent à remplacer le dernier for…of par ça :
results.push(...TYPES)
```

### Spread

```js
const results = [...document.querySelectorAll('h4')]
  .map(({ innerText }) => innerText)
```

### Notre propre objet, itérable

```js
const recorder = {
  _runCalls: [],

  run (...args) {
    this._runCalls.push({ args })
  },

  [Symbol.iterator] () {
    const calls = this._runCalls
    let callIndex = 0
    return {
      next () {
        if (callIndex == calls.length) {
          return { done: true }
        }

        return {
          value: calls[callIndex++],
          done: false
        }
      }
    }
  }
}
```

Et voilà !

----

This content © 2016 Delicious Insights
