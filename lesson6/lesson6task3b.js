let number = 13.33
let parts = 6

let partsArray = [];
let remaining = number;

for (i = 0; i < parts - 1; i++){
    let maxNumber = remaining
    let randNumber = (Math.random() * (maxNumber)).toFixed(2);
    remaining -= randNumber
    partsArray.push(randNumber)
}
partsArray.push(remaining.toFixed(2))




console.log(partsArray)