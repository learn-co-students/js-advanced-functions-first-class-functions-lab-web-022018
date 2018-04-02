// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){

    let arr = []
     arr.push(drivers[0], drivers[1])  
     return arr

}

const returnLastTwoDrivers = function(drivers){
    let arr = []
     arr.push(drivers[drivers.length-2], drivers[drivers.length-1])  
     return arr
}

// PASS IN THE FUNCTIONS LIKE this

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, whichDrivers){
  return whichDrivers(drivers)
}
 