// === Itérables : spread

const results = // ???

// === Code de vérification -- ne pas toucher

const HEADINGS = [
  'for…of', 'Spread', 'Notre propre objet, itérable'
]
HEADINGS.forEach((text, index) => {
  assertEqual(results[index], text)
})
