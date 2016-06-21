// === Fonctions fléchées : this

const BDFL = {
  biasedTowards: ['bob', 'david'],

  processContributions(contribs) {
    return contribs.filter(
      (xxx) => '???'
    )
  }
}

// === Code de vérification -- ne pas toucher

const contribs = [
  { author: 'alice', value: 'high', sha: 'a7defa3' },
  { author: 'bob', value: 'medium', sha: 'd43ef15' },
  { author: 'claire', value: 'high', sha: '334ffb6' },
  { author: 'david', value: 'low', sha: 'a5248dd' },
  { author: 'alice', value: 'high', sha: '734fabe' },
  { author: 'bob', value: 'high', sha: 'deadb0f' }
]
const remainingContribs = BDFL.processContributions(contribs)

assertEqual(remainingContribs.length, 3)
assertEqual(remainingContribs[0].sha, contribs[1].sha)
assertEqual(remainingContribs[1].sha, contribs[3].sha)
assertEqual(remainingContribs[2].sha, contribs[5].sha)
