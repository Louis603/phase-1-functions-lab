const headquarters = 42;
let one = 1;
function distanceFromHqInBlocks(passenger) {
    if (passenger > headquarters){
        return passenger - headquarters;
    }
    if (passenger < headquarters){
        return headquarters - passenger;
    }
}

const blocks = distanceFromHqInBlocks;

function distanceFromHqInFeet(passenger){
    return distanceFromHqInBlocks(passenger) * 264;
}

function distanceTravelledInFeet (start, destination){
    if (start < destination){
        return (destination - start) * 264;
    }
    else if (start > destination){
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination){
     if (distanceTravelledInFeet (start, destination) < 400){
         return (distanceTravelledInFeet(start,destination) * 0);
     }
     else if ((distanceTravelledInFeet (start, destination) > 400) && (distanceTravelledInFeet (start, destination) < 2000)){
         return ((distanceTravelledInFeet(start,destination) - 400) * .02); 
     }
     else if ((distanceTravelledInFeet(start,destination) < 2500) && (distanceFromHqInFeet(start, destination) > 2000)) {
         return 25;
     }
     else if (distanceTravelledInFeet(start, destination) > 2500) {
         return 'cannot travel that far';
     }

}
