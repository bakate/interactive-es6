// === Déstructuration : concat modifiant

const arr1 = ['Alice', 'Bob']
const arr2 = ['Claire', 'David']

const newLength = arr1.push(/* ??? */)

// === Code de vérification -- ne pas toucher

assertEqual(newLength, 4)
assertEqual(arr1[2], arr2[0])
assertEqual(arr1[3], arr2[1])
