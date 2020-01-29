//function noVowels(message) {

//var vowels= 'aeiou'
 //   }
//message = "Hello, how are you?";
///console.log(noVowels(message));


function removeVowels(message){
    var vowels = "aieuo";
    var strArr = message.toLowerCase().split("");
    var newArr = strArr.filter(function(letter){
        if(vowels.indexOf(letter)  == -1){
            return letter;
        }
    });
    var string = "";
    newArr.forEach(function(letter){
        string += letter;
    });
    return string;
}
message= "Hello how are you"
console.log (removeVowels(message));