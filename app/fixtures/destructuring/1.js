// === Déstructuration : tableaux

// Affecter correctement ES2015 et ES2016
const '???' = ['Elm', 'ES6', 'ES7', 'Go', 'Haskell', 'Ruby']

// Affecter correctement winner, runnerUp et others
const '???' = ['Alice', 'Bob', 'Claire', 'Dave']

// === Code de vérification -- ne pas toucher

assertEqual(ES2015, 'ES6')
assertEqual(ES2016, 'ES7')

assertEqual(winner, 'Alice')
assertEqual(runnerUp, 'Bob')
assertEqual(others.join ? others.join(' ') : others, 'Claire Dave')
