// === Fonctions fléchées : prédicats et filtres

const people = ['Alice', 'Bob', 'Claire', 'David']

const longerNames = filterNamesAtLeast(6)

function filterNamesAtLeast (minLength) {
  return people.filter(
    (xxx) => '???'
  )
}

// Sans utiliser de compteur externe…
const prefixedUpperNames = people.map(
  (xxx) => '???'
)

// === Code de vérification -- ne pas toucher

assertEqual(longerNames.join(' '), 'Claire')
assertEqual(prefixedUpperNames[0], '1. ALICE')
assertEqual(prefixedUpperNames[3], '4. DAVID')
