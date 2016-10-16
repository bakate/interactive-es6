// === Déstructuration : « paramètres nommés »

// Déclarez convenablement term, times (défaut : 1)
// et separator (défaut : ',') dans la signature.
function repeat (/* ??? */) {
  const result = []
  for (let index = 0; index < times; ++index) {
    result.push(term)
  }
  return result.join(separator)
}

// === Code de vérification -- ne pas toucher
assertEqual(repeat({ term: 'yolo' }), 'yolo')
assertEqual(repeat({ times: 3, term: 'yolo' }), 'yolo,yolo,yolo')
assertEqual(repeat({ times: 2, term: 'yolo', separator: '-' }), 'yolo-yolo')
