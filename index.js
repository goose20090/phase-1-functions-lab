
function distanceFromHqInBlocks(customersLocation){
    const distanceFromHqInBlocks = customersLocation - 42;
    if (distanceFromHqInBlocks<0){
        return distanceFromHqInBlocks * -1;
    }
    return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(customersLocation){

    const distanceFromHqInFeet = distanceFromHqInBlocks(customersLocation) * 264;
    return distanceFromHqInFeet

}

function distanceTravelledInFeet(start, destination){
    const distanceTravelledInFeet= distanceFromHqInFeet(start)- distanceFromHqInFeet(destination);
    if (distanceTravelledInFeet<0){
        return distanceTravelledInFeet * -1;
    } 
    return distanceTravelledInFeet;
}

function calculatesFarePrice (start, destination){
    const farePrice = (distanceTravelledInFeet(start, destination)- 400) * 0.02;
    if (distanceTravelledInFeet(start,destination)< 400){
        return 0;
    }
    if (distanceTravelledInFeet(start, destination)> 400, distanceTravelledInFeet(start, destination) < 2000){
        return farePrice;
    }
    if (distanceTravelledInFeet(start, destination)> 2000, 2500> distanceTravelledInFeet(start,destination)){
        return 25;
    }
    if(distanceTravelledInFeet(start,destination)>2500){
        return "cannot travel that far"
    }

}
