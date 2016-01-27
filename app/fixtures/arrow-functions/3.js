// === Fonctions fléchées : pièges lexicaux

const obj = {
  allTerms: new Set(),

  getLogger(logFx) {
    return // ???
  }
}

// === Code de vérification -- ne pas toucher

const terms = []

var log = obj.getLogger(term => terms.push(term))
log('c’est', 'tout', 'simple', 'pour', 'une', 'fois')
assertEqual(terms.length, 6)
assertEqual(obj.allTerms.size, 6)
assertEqual(obj.allTerms.has('simple'), true)

terms.length = 0
const newTerms = 'il était une fois un langage qui défonçait tout'.split(' ')
log(...newTerms)
assertEqual(terms.length, newTerms.length)
assertEqual(obj.allTerms.size, 12)
assertEqual(obj.allTerms.has('langage'), true)
