import store from 'store';

const STORE_PREFIX = 'es6workshop=';


const fixtureToKey = (fixture) => STORE_PREFIX + fixture.split('.')[0];

export function saveChallenge(fixture, src) {
  store.set(fixtureToKey(fixture), src);
}

export function getChallenge(fixture) {
  if (store.get(fixtureToKey('ignore-fixtures'))) {
    return null;
  }
  return store.get(fixtureToKey(fixture));
}

export function clearChallenge(fixture) {
  store.remove(fixtureToKey(fixture));
}

