// === Littéraux objets : propriétés raccourcies et méthodes

const first = 'Georges'
const last = 'Abitbol'

const roiDeLaClasse = {
  // ???
}

// === Code de vérification -- ne pas toucher

assertEqual(roiDeLaClasse.first, first)
assertEqual(roiDeLaClasse.last, last)

try {
  assertEqual(roiDeLaClasse.fullName(), `${first} ${last}`)
} catch (err) {
  createAssertResult(false, 'method missing', [err])
}

roiDeLaClasse.first = 'John'
roiDeLaClasse.last = 'Wayne'
try {
  assertEqual(roiDeLaClasse.fullName(), 'John Wayne')
} catch (err) {
  createAssertResult(false, 'method missing', [err])
}
