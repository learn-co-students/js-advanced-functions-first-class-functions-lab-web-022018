// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length - 2,  drivers.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (number) {
  return function (number) {
    return number*number
  }
}

const fareDoubler = function (number) {
    return number*2
}

const fareTripler = function (number) {
  return number * 3
}

function selectDifferentDrivers(drivers, f) {
  return f(drivers)
}
