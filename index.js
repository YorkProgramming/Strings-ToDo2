//1 
//Reverse

/* Implement reverseString(str) that, given string, 
returns that string with characters reversed.

Given "creature", return "erutaerc". 
Tempting as it seems, do not use the built-in reverse()!
*/

function reverseString(str){
    var newStr = "";
    
    for(var i = str.length-1; i >= 0; i--){
        newStr += str[i];
    }

    return newStr;
}

//Example:
console.log(reverseString("creature"));

//We set var i to the length of the string -1 
//because the index of the last character is the length of the string -1

//We then loop through the string backwards and add each character to the new string
//We return the new string

//#############################################################################################################################

//2
//Remove Even-Length Strings

/* Build a standalone function to remove strings of even lengths from a given array.
For array containing ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."],
change that same array to ["Nope!","Its","Chris","."].
*/

function removeEvenLengthStrings(arr){
    for(var i = 0; i < arr.length; i++){

        if(arr[i].length % 2 == 0){
            arr.splice(i,1);
            i--;
        }
    }

    return arr;
}

//Example:
console.log(removeEvenLengthStrings(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]));

//We loop through the array and check if the length of the string is even
//If it is, we remove it from the array and decrement i by 1
//We return the array

//#############################################################################################################################

//3
//Integer to Roman Numerals

/* Given a positive integer that is less than 4000, 
return a string containing that value in Roman numeral representation. 
In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, 
and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.
*/

function integerToRomanNumerals(num){
    var roman = "";
    var romanNumerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    for(var i = 0; i < values.length; i++){
        while(num >= values[i]){
            roman += romanNumerals[i];
            num -= values[i];
        }
    }

    return roman;
}

//Example:
console.log(integerToRomanNumerals(444));

//We create a variable roman to hold the roman numeral string
//We create an array of roman numerals and an array of their corresponding values
//We loop through the values array and check if the number is greater than or equal to the current value
//If it is, we add the roman numeral to the string and subtract the value from the number
//We return the roman numeral string

//#############################################################################################################################

//4
//Roman Numerals to Integer

/* Sept 16, 2014 headline: “Ancient Computer Found in Roman Shipwreck”. 
Comprising 30 bronze gears, its wooden frame features 2000 characters.
Given a string containing a Roman numeral representation of a positive integer, 
return the integer. 
Remember that III is 3, DCIX is 609 and MXDII is 149 
*/