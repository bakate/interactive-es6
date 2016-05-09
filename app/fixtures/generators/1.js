// === Générateurs : 3 petits tours et puis s’en vont…

function* wannTouTri () {
  // ???
}

// === Code de vérification -- ne pas toucher

const gen = wannTouTri()
assertEqual(gen.next().value, 1)
assertEqual(gen.next().value, 2)
assertEqual(gen.next().value, 3)
assertEqual(String(gen.next().done), 'true')
