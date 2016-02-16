// === Déstructuration : tableaux

// Affecter correctement winner, runnerUp et others
const '???' = ['Alice', 'Bob', 'Claire', 'Dave']

// === Code de vérification -- ne pas toucher

assertEqual(winner, 'Alice')
assertEqual(runnerUp, 'Bob')
assertEqual(others.join ? others.join(' ') : others, 'Claire Dave')
