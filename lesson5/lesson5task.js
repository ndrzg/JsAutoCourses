let newString = '42'
//let newString = 'hello'   //in that case  result:  hellotrue hello42 43 | NaN NaN 42 | NaN NaN 42
let newBoolean = true 
let newNumber = 42


console.log(newString + newBoolean, newString + newNumber, newNumber + newBoolean)
console.log(newString *  newBoolean, newString *  newNumber, newNumber * newBoolean)
console.log(newString / newBoolean, newString / newNumber, newNumber / newBoolean)

console.log(String(newBoolean), String(newNumber))
console.log(Boolean(newString),Boolean(newNumber) )
console.log(Number(newString),Number(newBoolean))
