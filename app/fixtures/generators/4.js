// === Générateurs : Conversation 3 (throw/try/catch)

function* untilThen () {
  // ???
}

// === Code de vérification -- ne pas toucher

const values = []
for (let index = 0; index < Math.ceil(Math.random() * 6); ++index) {
  values.push(Math.round(Math.random() * 41))
}
values.splice(Math.floor(Math.random() * (values.length - 1)) + 1, 0, 42)
const gen = untilThen()
gen.next()
values.some((value) => {
  if (value === 42) {
    const result = gen.throw(new ReferenceError('WTF 42?'))
    assertEqual(result.value, 'WTF 42?')
    assertEqual(result.value + ' ' + result.done, result.value + ' true')
    return true
  } else {
    const result = gen.next()
    assertEqual(value + ' ' + result.done, value + ' false')
  }
})
