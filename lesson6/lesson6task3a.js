let number = 13
let parts = 6

let partsArray = [];
let remaining = number;
  
    for (let i = 0; i < parts - 1; i++) {
      let maxNumber = remaining;
      let randNumber = Math.floor(Math.random() * (maxNumber + 1));
      remaining -= randNumber;
      partsArray.push(randNumber);
    }
  
    partsArray.push(remaining);
  
    console.log(partsArray)