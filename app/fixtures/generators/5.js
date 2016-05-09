// === Générateurs : Délégation officielle

function* weAreLegion (...fawkes) {
  // ???
}

// === Code de vérification -- ne pas toucher

const headings = document.querySelectorAll('.nav a')

const gen = weAreLegion(
  ['Guy', 'Fawkes'],
  'Evey',
  headings
)
const results = [
  'Guy', 'Fawkes', 'E', 'v', 'e', 'y',
  ...headings
]
results.forEach((item) => {
  const result = gen.next()
  assertEqual(result.value.innerText || result.value, item.innerText || item)
})
assertEqual(String(gen.next().done), 'true')
