  //  Feet-to-Mile
               
function feetToMile(feet){
    if(feet < 0){
        return "Distance can't be negative" ;
    }
    var mile = feet / 5280;
    return mile ; 
}    
var convertResult = feetToMile(10000);
console.log("after convert mile is :",convertResult);
var convertResult = feetToMile(-10000);
console.log("after convert mile is :",convertResult);



//   Wood-Calculator

function woodCalculator(chair, table, bed){
    if((chair < 0) || (table < 0) || (bed < 0)){
        return "enter valid numbers";
    }
    var woodForChair = 1 * chair;
    var woodForTable = 3 * table;
    var woodForBed = 5 * bed;

    var totalWoodNeed = woodForChair + woodForTable  + woodForBed ;
    return totalWoodNeed;
}
var wood = woodCalculator(5, 10, 15);
console.log("total wood need :", wood);



//   tiny-friend

function tinyFriend(friendList) {
    if(friendList === 0){
        return "invalid name list";
    }
    var shortest = friendList[0];
    for(var i = 1; i < friendList.length; i++){
      if(friendList[i].length < shortest.length){
      shortest = friendList[i];
       }
    }
    return shortest;
  }
var shortestWord = tinyFriend(['karim', 'madhob', 'debumondol', "tuni"]);
console.log("shortest string of the array is :", shortestWord );



//Bricks-Calculator

function brickCalculator(floorNumber){
    if(floorNumber <= 0){
        return "invalid number of floor";
    }
    var amountOfBrick;
    var feet = 1000;
    if(floorNumber <= 10){
        amountOfBrick = floorNumber * 15 *feet ; 
    }
    else if(floorNumber > 10 && floorNumber <= 20){
        amountOfBrick = ((10 * 15) + ((floorNumber - 10) * 12)) * feet;
    }
    else {
        amountOfBrick = ((10 * 15) + (10 * 12) + ((floorNumber - 20) * 10)) * feet;
    }
    return amountOfBrick ;
}
var totalBricks = brickCalculator(17);
console.log("number of bricks need :",totalBricks);



