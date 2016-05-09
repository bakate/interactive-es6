// === Générateurs : Conversation 1 (next/yield)

function* whatSayYou (start) {
  // ???
}

// === Code de vérification -- ne pas toucher

const gen = whatSayYou(7)
assertEqual(gen.next().value, 7)
assertEqual(gen.next(2).value, 14)
assertEqual(gen.next(3).value, 42)
assertEqual(String(gen.next().done), 'true')
