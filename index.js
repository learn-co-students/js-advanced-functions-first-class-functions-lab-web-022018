// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  var arr = drivers
  return arr.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
  var arr = drivers
  return arr.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(m) {
  function number(n) {
    return n * m;
  }
  return number;
}

function fareDoubler(n) {
  return n + n
}

function fareTripler(n) {
  return fareDoubler(n) + n
}

function selectDifferentDrivers(arrayOfDrivers, fun) {
  return fun(arrayOfDrivers)
}
