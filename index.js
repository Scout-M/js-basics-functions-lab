// Code your solution in this file!

function distanceFromHqInBlocks(pickUp) {
  const headquarters = 42;
  if (pickUp < headquarters) {
    return headquarters - pickUp;
  }
  return pickUp - headquarters;
}

function distanceFromHqInFeet(pickUp) {
  const blocks = distanceFromHqInBlocks(pickUp);
  return blocks * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  if (startingBlock < endingBlock) {
    return (endingBlock - startingBlock) * 264;
  }
  return (startingBlock - endingBlock) * 264;
}

function calculatesFarePrice(start, destination) {
  const feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400) {
    return 0;
  } else if (feet <= 2000) {
    return (feet - 400) * 0.02;
  } else if (feet > 2000 && feet < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
