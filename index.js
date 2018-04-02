// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  const newDrivers = [...drivers]
  return newDrivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  const newDrivers = [...drivers]
  return newDrivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiple){
  return function(fare){
    return fare * multiple
  }
}

function fareDoubler(fare){
  return fare * 2
}

function fareTripler(fare){
  return fare * 3
}

const selectDifferentDrivers = function(arrayOfDrivers, whichDrivers){
  return whichDrivers(arrayOfDrivers)
}
