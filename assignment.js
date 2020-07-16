  //  Feet-to-Mile
               
function feetToMile(feet){
    var mile = feet / 5280;
    return mile ; 
}    
var convertResult = feetToMile(10000);
console.log("after convert mile is",convertResult);




//   Wood-Calculator

function woodCalculator(chair, table, bed){
    var woodForChair = 1;
    var woodForTable = 3;
    var woodForBed = 5;
    var result1 = woodForChair * chair;
    var result2 = woodForTable * table;
    var result3 = woodForBed * bed;
    var totalWoodNeed = result1 + result2 + result3;
    
    console.log( "wood for chair:", result1, ", wood for table", result2, ", wood for bed", 
    result3, ", total wood need", totalWoodNeed);
    
}
woodCalculator(2, 4, 5);
woodCalculator(5, 10, 15);





