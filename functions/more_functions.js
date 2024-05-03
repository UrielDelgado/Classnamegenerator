"use strict"

function displayMailingLable(name, adress, city, state){
    //adding things in the () will work like a function but you have to call the function and include the value


    console.log(` Hello ${name} your adress is ${adress} ${city} ${state}`);
}
 displayMailingLable("goku", "1527 cleardrive", "Arizona", "phoenix");

function myFavoriteCharacter(name, powerLv, colorShirt){

    console.log(` My favorite character is ${name} his power lever is ${powerLv} the color shirt they wear is ${colorShirt}`);


}
myFavoriteCharacter("Vegeta", "9000", "blue");
myFavoriteCharacter("Gohan", "10000", "orange");
myFavoriteCharacter("Picolo", "8000", "purple");
// the word "vegeta" can be changed in the sentence with other character in the name value



function addNumber(num1, num2){
    
    return num1 + num2
    // return lets you use the varaibles multiple time with out error, outside of the function.

}
//console.log(addNumber(null,null));//calling the function addNumber
let result = addNumber(7,6);// storring addNumber to a variable

console.log(`${result}`);// displaying addNumber through result(variable)


function displayReceipt(totalDue, amountPaid){
    return totalDue - amountPaid
}
let changeDue = displayReceipt(10000, 6000)

console.log(`Your change is $${changeDue.toFixed(2)}`);