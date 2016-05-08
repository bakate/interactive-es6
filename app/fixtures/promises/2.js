// === Promesses : Chaînage des traitements

function getUserFormattedEmail (url) {
  // ???
}

// === Code de vérification -- ne pas toucher

assertResolvesTo(
  getUserFormattedEmail('http://jsonplaceholder.typicode.com/users/1'),
  'Leanne Graham <Sincere@april.biz>'
)

assertResolvesTo(
  getUserFormattedEmail('http://jsonplaceholder.typicode.com/users/10'),
  'Clementina DuBuque <Rey.Padberg@karina.biz>'
)
