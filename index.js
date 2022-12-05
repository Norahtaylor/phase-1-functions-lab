// Code your solution in this file!



function distanceFromHqInBlocks(blockNumber) {
   return blockNumber > 42 ? blockNumber - 42 : 42 - blockNumber
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(block1, block2){
    if(block1 > block2){
        return (block1-block2) *264
    }else {
        return (block2-block1) * 264
    } 
}

function calculatesFarePrice(block1, block2){
    let distance = distanceTravelledInFeet(block1,block2)

    if (distance < 400){
        return 0
    }else if ( distance > 400 && distance < 2000 ) {
        return (distance-400) * .02
    } else if (distance > 2000 && distance < 2500){
        return 25
    }else {
        return "cannot travel that far"
    }
}
















































//function distanceFromHqInBlocks(number, number2){
  //  return number - number2 
//}
//distanceFromHqInBlocks(43,42)
//distanceFromHqInBlocks(50,42)

// function distanceFromHqInBlocks(block){
//     let headquarterLocation = 42;

//     if (block > headquarterLocation) {
//         return block - headquarterLocation
//     }   else {
//         return headquarterLocation - block

//         }
//     }
//return Math.abs(42- block)
//console.log(distanceFromHqInBlocks(90))

// fucntion distanceFromHqInFeet()

// distanceTravelledInFeet(street){
//     Math.abs(42 - street) * 264
// }
// function distanceFromHqInFeet(street) {
// return distanceFromHqInBlocks(street) * 264 }

// function distanceTravelledInFeet(start, end) {
//     return Math.abs(start - end) * 264
// }
// console.log(distanceTravelledInFeet(10, 26))

// function calculatesFarePrice(start, end) {
//     let distance = distanceTravelledInFeet(start, end) ;

// if(distanceTravelledInFeet(start, end) <= 400 {
//     return 0; }
//     else if(distanceTravelledInFeet(start, end) <2000 && > distanceTravelledInFeet(start, end) > 400)
//     return distance * 0.2
// { 
//    return distanceTravelledInFeet(start, end) * 0.02 }

//    else if  (distanceTravelledInFeet > 2000 && distance < 2500) {
//        return 25
//        else { 
//            return 'Cannot travel that far'
//        }
//    }
// }})

//     return 
// }









//function distanceFromHqInFeet(start, destination){
  //  return (start + destination) * 264
//}