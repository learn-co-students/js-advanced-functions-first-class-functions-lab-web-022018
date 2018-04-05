// Code your solution in this file!
const returnFirstTwoDrivers = function(arr)
{
   return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr)
{
  return arr.slice((arr.length-2), arr.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (mult)
{
  return function (value)
    {
      return mult * value;
    };
};

const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arr, whichDrivers)
{
  return whichDrivers(arr);
}
