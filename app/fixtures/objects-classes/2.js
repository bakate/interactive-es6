// === Litéraux objets : accesseurs lecteurs/écrivains

const roiDeLaClasse = {
  first: 'Georges',
  last: 'Abitbol'

  // ???
}

// === Code de vérification -- ne pas toucher

assertEqual(roiDeLaClasse.fullName, 'Georges Abitbol')
roiDeLaClasse.fullName = 'John Wayne'
assertEqual(roiDeLaClasse.first, 'John')
assertEqual(roiDeLaClasse.last, 'Wayne')
