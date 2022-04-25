//write a function, `distanceFromHqInBlocks`,that takes in a pickup location for a passenger, and returns the _number ofblocks_ from Scuber headquarters on 42nd Street.

function distanceFromHqInBlocks(block){
           return Math.abs (block - 42)
}


//`distanceFromHqInFeet` translates the number of blocksfrom headquarters to the distance in feet. Each block in Manhattan is 264 feet long.
function distanceFromHqInFeet(block) {
         return distanceFromHqInBlocks(block) * 264
}


//distanceTravelledInFeet` that takes in both the start and destination blocks, and returns the number of feet travelled.
function distanceTravelledInFeet(start, destination){
      if (destination > start) {
        return (destination - start) * 264
    } else {
        return (start - destination) * 264
    }
}


// The first four hundred feet are free. For a distance between 400 and 2000 feet, the price is
// 2 cents per foot (not including 400, which are free!). Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
function calculatesFarePrice(start, destination){
    const travelledFeet = distanceTravelledInFeet(start,destination)
    if (travelledFeet <= 400){
        return 0
    }   else if (travelledFeet > 400 && travelledFeet <= 2000) {   //between 400 and 2000 feet, the price is 2 cents per foor (not u 
        return 0.02 * (travelledFeet - 400)
    }   else if (travelledFeet >2000 && travelledFeet <= 2500){
        return 25
    }   else {
             return 'cannot travel that far'}             //default
}

