import {hashMapFactory} from './hashMapFactory.js'

let testingHashMap = hashMapFactory()

testingHashMap.set('apple', 'red')
testingHashMap.set('potato', 'brown')
testingHashMap.set('abcra', 'green')
testingHashMap.set('bwoiheaw', 'green')
testingHashMap.set('cetva', 'green')
testingHashMap.set('devir', 'green')
testingHashMap.set('fat man', 'green')
testingHashMap.set('heartAttack', 'green')
testingHashMap.set('ksdafl', 'green')
testingHashMap.set('mfdsan', 'green')
testingHashMap.set('bv', 'green')
testingHashMap.set('vc', 'wown')

testingHashMap.set('increaseSize', 'testies')



console.log(testingHashMap.get('increaseSize'))
console.log(testingHashMap.get('vc'))
console.log(testingHashMap.get('apple'))

console.log(testingHashMap.has('increaseSize'))
console.log(testingHashMap.has('carrot'))

console.log(testingHashMap.remove('increaseSize'))
console.log(testingHashMap.has('increaseSize'))

console.log(testingHashMap.length())