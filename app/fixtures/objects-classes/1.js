// === Litéraux objets : propriétés raccourcies et méthodes

const first = 'Georges'
const last = 'Abitbol'

const roiDeLaClasse = {
  // ???
}

// === Classes : constructeurs et méthodes

class Person {
  // ???
}

// === Code de vérification -- ne pas toucher

assertEqual(roiDeLaClasse.first, first)
assertEqual(roiDeLaClasse.last, last)

try {
  assertEqual(roiDeLaClasse.fullName(), `${first} ${last}`)
} catch (err) {
  createAssertResult(false, 'method missing', [err])
}

const meilleurActeur = new Person('Clark', 'Gable')
assertEqual(meilleurActeur.first, 'Clark')
assertEqual(meilleurActeur.last, 'Gable')

try {
  assertEqual(meilleurActeur.fullName(), 'Clark Gable')
} catch (err) {
  createAssertResult(false, 'method missing', [err])
}
