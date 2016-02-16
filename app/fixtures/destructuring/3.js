// === Déstructuration : objets

const nostromo = {
  name: { first: 'Christophe', last: 'Porteneuve' },
  trainings: ['JS Total', 'Node.js', 'Git Total']
}

// Affectez correctement first, lastName, nodeTraining
const '???' = nostromo

// === Code de vérification -- ne pas toucher

assertEqual(first, nostromo.name.first)
assertEqual(lastName, nostromo.name.last)
assertEqual(nodeTraining, nostromo.trainings[1])
