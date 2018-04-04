// Code your solution in this file!
const returnFirstTwoDrivers = function (driverArray) {
  return driverArray.slice(0,2)}
const returnLastTwoDrivers = function (driverArray) {
  return driverArray.slice(-2)}
const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers]
const createFareMultiplier = function (intArg){
  return function (fare) {
    return intArg * fare}}
const fareDoubler = function (fare){
  return createFareMultiplier(2)(fare)}
const fareTripler = function (fare){
  return createFareMultiplier(3)(fare)}
const selectDifferentDrivers = function (driverArray, func){
  return func(driverArray)
}
