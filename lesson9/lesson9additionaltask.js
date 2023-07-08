const initailNumber = 2

new Promise(resolve => {
    resolve(initailNumber)
})

.then((number => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.pow(number, 2))
        }, 3000)
    })
}))
.then(increaseNumber => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.pow(increaseNumber, 2))
        }, 3000)
    })
    .then(result => console.log(result))
 })



// function square(number, delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve (number * 1 )
//       }, delay)
//     })
//   }
  
//   square(2, 3000)
//     .then((number) => square(number, 3000))
//     .then((number) => square(number, 3000))
//     .then((finalNumber) => {
//       console.log(finalNumber)
//       return finalNumber
//     })




// new Promise(resolve => {
//     resolve(2)
// })

// .then((number) => {

//  setTimeout(() => {
//             return number * number 
//     }, 3000)
    
// })
// .then((number) => {
    
//         setTimeout(() => {
//             return number * number 
//         }, 3000)
//     })
    

//  .then(result => {
//    console.log(result)
//    return result
//})



