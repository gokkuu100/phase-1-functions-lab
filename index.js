// Code your solution in this file!
function distanceFromHqInBlocks(pickLocation) {
    let scubaHq = 42;
    let distance = Math.abs(pickLocation - scubaHq);
    return distance;
}

function distanceFromHqInFeet(distance) {
    if (distance>=42) {
        return (distance-42) * 264;
    } else if (distance<=42) {
        return Math.abs((42-distance) * 264);
    }
}

function distanceTravelledInFeet(point1, point2) {
    if (point1>=point2) {
        return (point1-point2) * 264;
    } else if (point2>=point1) {
        return (point2-point1) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance=start-destination;
    let distanceFeet=Math.abs(distance*264);
    let fare = distanceFeet-400;

    if (distanceFeet>2500) {
        return `cannot travel that far`;
    } else if(distanceFeet>2000) {
        return 25;
    } else if (distanceFeet>400 && distanceFeet<2000) {
        return (fare*2)/100;
    } else if (distanceFeet<400){
        return 0;
    } else {
        return `not accepted`;
    }
}


// console.log(calculatesFarePrice(34,24));
// console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(34));