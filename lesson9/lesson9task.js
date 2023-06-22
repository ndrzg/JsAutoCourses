

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 4500)
  })

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 5000)
  })

  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3)
    }, 2300)
  })

    Promise.race([promise1, promise2, promise3]).then((value) => {
    console.log(value)})



    

function getNum() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 5) + 1
        resolve(randomNumber)
      }, 3000)
    });
  }
  
  async function processNumber() {

      const number = await getNum()
      const squaredNumber = number * number
      console.log(squaredNumber)

  }
  
  processNumber();




let getNum = function(delay, min, max) {
   
 return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
            resolve(randomNumber)
            }, delay )
          })

}


const asyncFunc = async () => {

    const promiceFirst = await getNum(3000, 1, 5)
    const promiceSecond = await getNum(5000, 6, 10)
    let sum = promiceFirst + promiceSecond
    console.log(sum)
}

asyncFunc()