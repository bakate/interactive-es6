// === Générateurs : Conversation 2 (return)

function* nowOrLater (value) {
  // ???
}

// === Code de vérification -- ne pas toucher

const values = []
for (let index = 0; index < Math.ceil(Math.random() * 6); ++index) {
  values.push(Math.round(Math.random() * 41))
}
values.splice(Math.floor(Math.random() * (values.length - 1)) + 1, 0, 42)
const gen = nowOrLater(values[0])
let result = gen.next()
while (values.length > 0) {
  assertEqual(result.value, values[0])
  assertEqual(values[0] + ' ' + result.done, values[0] + ' ' + (values[0] === 42))
  if (result.done) {
    break
  }
  values.shift()
  result = gen.next(values[0])
}
