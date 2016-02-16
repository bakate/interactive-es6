// === Template Strings : tagged

const [yay, nay, yo] = ['Yay', 'Nay', 'Yo']

const result = bracketize`They say ${yay} then they say ${nay} but they mean ${yo}`

function bracketize(/* ??? */) {
  return statics.reduce(function(acc, text, index) {
    return acc + // ???
  }, '')
}

// === Code de vérification -- ne pas toucher

assertEqual(result, 'They say [Yay] then they say [Nay] but they mean [Yo]')
