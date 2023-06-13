
let startDate  = new Date(Date.UTC(2000, 1, 1))
let endDate  = new Date ()

let fridayNumber = 13
let dayOfWeek = 6

let fridaysCount = 0 

while(startDate<endDate){
    if(startDate.getDate() == fridayNumber && startDate.getDay() == dayOfWeek ){
        fridaysCount++
    }
    startDate.setDate(startDate.getDate() + 1)
}


console.log(fridaysCount)