// Code your solution in this file!
const returnFirstTwoDrivers = function (arr){
  newArr = arr.slice(0,2);
  return newArr;
}


const returnLastTwoDrivers = function (arr){
  newArr = arr.slice(-2);
  return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
  return function (fare) { return fare * num }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arr, fn){
  return fn(arr);
}
