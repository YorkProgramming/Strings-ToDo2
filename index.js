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