function noVowels(message) {

var vowels = 'aeiou'
var noVowelsString = "";
//var currentLetter = message.charAt(i)

for(var i=0; i<message.length; i++){
    var currentLetter = message.charAt(i);    
    if(vowels.indexOf(currentLetter) < 0 ){
        noVowelsString += currentLetter

    }
return noVowelsString;
}

message = "Hello, how are you?";

console.log(noVowels(message));}


function everyOther(message){
    var string = "";

    for(var i=0; i<message.length; i+=4)
    var fourthLetter = message.charAt(i);
    string += fourthLetter;
}
    return string 
    
message = "Hello how are you?"
console.log(everyOther(message));