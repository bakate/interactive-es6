// === Itérables : for…of

const NAMES = ['Alice', 'Bob', 'Claire', 'David']
const LANGS = new Map([['JS', 42], ['Elm', 40], ['Rust', 20]])
const TYPES = new Set(['a', 'b', 'c', 'd', 'a', 'e', 'c', 'd'])
const results = []

// ??? (des for…of uniquement)

// === Code de vérification -- ne pas toucher

const EXPECTED = [
  '1. Alice', '2. Bob', '3. Claire', '4. David',
  'JS = 42', 'Elm = 40', 'Rust = 20',
  'a', 'b', 'c', 'd', 'e'
]
EXPECTED.forEach((text, index) => {
  assertEqual(text, results[index])
})
