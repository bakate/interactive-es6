// === Promesses : Quand y’en a pour un, y’en a pour trois

function getUserEmails (...ids) {
  // ???
}

// === Code de vérification -- ne pas toucher

assertResolvesTo(
  getUserEmails(1, 2, 3),
  'Sincere@april.biz / Shanna@melissa.tv / Nathan@yesenia.net'
)

assertResolvesTo(
  getUserEmails(4),
  'Julianne.OConner@kory.org'
)
