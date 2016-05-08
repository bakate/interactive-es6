// === Promesses : Consommation & `.then`

function getAndStatus (url) {
  // ???
}

// === Code de vérification -- ne pas toucher

assertResolvesTo(
  getAndStatus('http://jsonplaceholder.typicode.com/users/1'),
  200
)
assertResolvesTo(
  getAndStatus('http://jsonplaceholder.typicode.com/users/42'),
  404
)
