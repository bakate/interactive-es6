// === Litéraux objets : propriétés calculées

function makeObject(customProp, customValue) {
  return {
    type: 'custom',
    createdAt: Date.now(),
    // ???
  }
}

// === Code de vérification -- ne pas toucher

const roberto = makeObject('name', 'Roberto')
assertEqual(roberto.name, 'Roberto')
assertEqual(roberto._name, 'Private Roberto')

const chris = makeObject('age', 38)
assertEqual(chris.age, 38)
assertEqual(chris._age, 'Private 38')
