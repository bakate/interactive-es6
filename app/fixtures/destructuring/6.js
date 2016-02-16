// === Déstructuration : spread sur objet

const ORIGINAL = { first: 'John', last: 'Smith' }

function derive(overrides) {
  return // ???
}

// === Code de vérification -- ne pas toucher

const derived = derive({ last: 'McLane', city: 'NYC', age: 38 })
assertEqual(derived.first, 'John')
assertEqual(derived.last, 'McLane')
assertEqual(derived.city, 'NYC')
assertEqual(derived.age, 42)
