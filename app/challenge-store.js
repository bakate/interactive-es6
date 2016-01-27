import store from 'store';

const STORE_PREFIX = '@@es6-jst/';

const fixtureToKey = (fixture) => STORE_PREFIX + fixture.split('.')[0];

function skipStorage() {
  return store.get(fixtureToKey('ignore-fixtures'));
}

export function saveChallenge(fixture, src) {
  if (!skipStorage()) {
    store.set(fixtureToKey(fixture), src);
  }
}

export function getChallenge(fixture) {
  return skipStorage() ? null : store.get(fixtureToKey(fixture));
}
