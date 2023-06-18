

function makesArrayReversed(array){
    let reversed = array.reverse()
    return reversed
}
console.log(makesArrayReversed([5, 66, 22, 4, 9, 54]))


function findMaxInArr(array){
   
    array.sort(function(a, b){
        return b - a 
    })
    return array[0]
}
console.log(findMaxInArr([1, 99, 44, 37, 28, 88]))


function generateFibonacci(startIndex, length) {
    let fibonacci = [];
    
    let current = 1;
    let next = 1;
  
   
    for (let i = 1; i < startIndex; i++) {
      let temp = next;
      next = current + next;
      current = temp;
    }
  
    for (let i = 0; i < length; i++) {
      fibonacci.push(current);
      let temp = next;
      next = current + next;
      current = temp;
    }
    
    return fibonacci;
  }
 console.log(generateFibonacci(3, 10))



function fourSymbols(first, second){
    let firstArray = Array.from(String(first), Number)
    let secondArray = Array.from(String(second), Number)
   
    let valueAndPossition = 0
    let value = 0 
    
    for(let i=0; i < firstArray.length; i++) {
     
        if(firstArray[i] === secondArray[i]){
            valueAndPossition++
            value++
        }else if(secondArray.includes(firstArray[i]) ){
            value++
        }
        

    }
     return {
        valueAndPossition: valueAndPossition,
        value: value }
}
console.log(fourSymbols(3487, 3794))




function sortsUpAndDown(array){
    
    let upSortedArray = array.slice().sort((a,b) => a-b)
    

    let downSortedArray =  array.slice().sort((a, b) =>b - a)
    

    return [upSortedArray, downSortedArray]

}
console.log(sortsUpAndDown([1, 99, 44, 37, 28, 88]))



function removesDuplicates(array) {
    let withoutDuplicates = new Set(array);
    return [Array.from(withoutDuplicates)];
  }

console.log(removesDuplicates([1, 99,1, 44, 37,1, 28,99, 88, 88, 44]))