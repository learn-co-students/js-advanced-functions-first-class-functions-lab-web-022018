// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  newArray = []
  newArray.push(drivers[0])
  newArray.push(drivers[1])
  return newArray
}

const returnLastTwoDrivers = function(drivers){
  newArray = []
  newArray.push(drivers[drivers.length - 2])
  newArray.push(drivers[drivers.length - 1])
  return newArray
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier =  function(argument){
  return function(fare){
    return argument * fare
  }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

debugger;

const selectDifferentDrivers = function(drivers,argument){
  return argument(drivers)
}
