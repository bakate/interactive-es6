// === Itérables : spread

const results = // ???

// === Code de vérification -- ne pas toucher

const HEADINGS = [
  'for…of', 'Spread', 'Notre propre objet, itérable'
]
for (const [index, text] of HEADINGS.entries()) {
  assertEqual(results[index], text)
}
