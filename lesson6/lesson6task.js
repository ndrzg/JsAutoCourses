// let player1 = Math.floor(Math.random() * 6) + 1
// let player2= Math.floor(Math.random() * 6) + 1


// let player1score = 0
// let player2score = 0

// for (let i = 0; i < 3; i++){
//     let diceThrowP1 = Math.floor(Math.random() * 6) + 1
//     let diceThrowP2 = Math.floor(Math.random() * 6) + 1

//     player1score = player1score += diceThrowP1
//     player2score = player2score += diceThrowP2
// }

// if (player1score > player2score){
//     console.log(`Player 1 won with ${player1score} points`)
//     }if(player2score > player1score){
//         console.log(`Player 2 won with ${player2score} points`)
//         }if (player1score == player2score){
//             console.log(`It's draw players has ${player1score} and ${player2score}`)
// }




// let startDate  = new Date(Date.UTC(2000, 1, 1))
// let endDate  = new Date ()

// let fridayNumber = 13
// let dayOfWeek = 6

// let fridaysCount = 0 

// while(startDate<endDate){
//     if(startDate.getDate() == fridayNumber && startDate.getDay() == dayOfWeek ){
//         fridaysCount++
//     }
//     startDate.setDate(startDate.getDate() + 1)
// }


// console.log(fridaysCount)



// let number = 13
// let parts = 6

// let partsArray = [];
// let remaining = number;
  
//     for (let i = 0; i < parts - 1; i++) {
//       let maxNumber = remaining;
//       let randNumber = Math.floor(Math.random() * (maxNumber + 1));
//       remaining -= randNumber;
//       partsArray.push(randNumber);
//     }
  
//     partsArray.push(remaining);
  
//     console.log(partsArray)



let fractionalNumber = 14.33
let partsForFractional = 3

let fractionalPartsArray = []
let remainingFractionalN = fractionalNumber

for (i = 0; i < partsForFractional - 1; i++){
    maxNumber = remainingFractionalN
    randNumber = (Math.random() * (maxNumber + 1)).toFixed(2);
    remainingFractionalN -= randNumber
    fractionalPartsArray.push(randNumber)
}
fractionalPartsArray.push(remainingFractionalN.toFixed(2))




console.log(fractionalPartsArray)