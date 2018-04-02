const returnFirstTwoDrivers = function (drivers){
	return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers){
	return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
	return function (fare) {return fare * multiplier}
}

const fareDoubler = function (fare){
	return fare * 2
}

const fareTripler = function (fare){
	return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, driverFunction){
	return driverFunction(arrayOfDrivers)
}