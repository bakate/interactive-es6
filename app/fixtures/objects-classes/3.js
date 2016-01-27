// === Litéraux objets : appels super

class Person {
  constructor (first, last) {
    this.first = first
    this.last = last
  }

  greet (whom) { return `Bonjour ${whom} !` }
}

class Geek extends Person {
  constructor (first, last, nick) {
    // ???
  }

  greet (whom) {
    // ???
  }
}

// === Code de vérification -- ne pas toucher

const defunkt = new Geek('Chris', 'Wanstrath', 'Defunkt')
assertEqual(defunkt.first, 'Chris')
assertEqual(defunkt.nick, 'Defunkt')
assertEqual(defunkt.greet('Scott'), 'Bonjour Scott ! Je suis Defunkt.')
