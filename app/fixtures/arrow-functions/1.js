// === Fonctions fléchées : prédicats et filtres

const people = ['Alice', 'Bob', 'Claire', 'David']

const longerNames = filterNamesAtLeast(6)

// Sans utiliser de compteur externe…
const prefixedUpperNames = people.map(
  (xxx) => '???'
)

function filterNamesAtLeast(minLength) {
  return people.filter(
    (xxx) => '???'
  )
}

// Bonus : convertir filterNamesAtLeast en
// fléchée d’ordre supérieur (attention, il faudra
// la déplacer avant son appel, elle ne sera plus
// *hoisted*).

// === Code de vérification -- ne pas toucher

assertEqual(longerNames.join(' '), 'Claire')
assertEqual(prefixedUpperNames.length, 4)
assertEqual(prefixedUpperNames[0], '1. ALICE')
assertEqual(prefixedUpperNames[3], '4. DAVID')
