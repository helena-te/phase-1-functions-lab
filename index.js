// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    //returns the number of blocks given a value
    let distance1 = pickupLocation - 42;
    let distanceInBlocks = Math.abs(distance1);
    return distanceInBlocks;
  }
distanceFromHqInBlocks(pickupLocation);
function distanceFromHqInFeet(pickupLocation) {
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    let distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    let distanceInFeet = distanceInBlocks * 264;
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceInFeet;
}
function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let numberOfFeetTravelled1 = (start  - destination) * 264;
    let numberOfFeetTravelled = Math.abs(numberOfFeetTravelled1);
    return numberOfFeetTravelled;
} 
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let numberOfFeetTravelled = distanceTravelledInFeet(start, destination);
    let fee;
    if (numberOfFeetTravelled < 400) {
        fee = 0;
    } else if (numberOfFeetTravelled >= 400 && numberOfFeetTravelled < 2000) {
        fee = (numberOfFeetTravelled - 400) * .02;
    } else if (numberOfFeetTravelled >= 2000 && numberOfFeetTravelled < 2500) {
        fee = 25;
    } else {
        fee = 'cannot travel that far';
    }
    return fee;
}    