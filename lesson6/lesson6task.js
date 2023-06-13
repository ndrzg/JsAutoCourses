let player1 = Math.floor(Math.random() * 6) + 1
let player2= Math.floor(Math.random() * 6) + 1


let player1score = 0
let player2score = 0

for (let i = 0; i < 3; i++){
    let diceThrowP1 = Math.floor(Math.random() * 6) + 1
    let diceThrowP2 = Math.floor(Math.random() * 6) + 1

    player1score = player1score += diceThrowP1
    player2score = player2score += diceThrowP2
}

if (player1score > player2score){
    console.log(`Player 1 won with ${player1score} points`)
    }if(player2score > player1score){
        console.log(`Player 2 won with ${player2score} points`)
        }if (player1score == player2score){
            console.log(`It's draw players has ${player1score} and ${player2score}`)
}









