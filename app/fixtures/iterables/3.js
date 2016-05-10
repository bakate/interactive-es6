// === Itérables : Notre propre objet, itérable

const recorder = {
  _runCalls: [],

  run (...args) {
    this._runCalls.push({ args })
  },

  // ???
}

// === Code de vérification -- ne pas toucher

const CALLS = [
  [], [42], [true, 'hello'], [/\bh[ae]llo\b/i]
]
CALLS.forEach((args) => recorder.run(...args))
const results = [...recorder]
CALLS.forEach((args, callIndex) => {
  results[callIndex].args.forEach((arg, index) => {
    assertEqual(String(arg), String(args[index]))
  })
})
