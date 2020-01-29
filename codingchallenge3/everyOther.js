function everyOther(message) {
    var string = "";
    for (var i = 0; i < message.length; i += 4){
        var fourthLetter = message.charAt(i);
    string += fourthLetter;
}
return string;
}
message = "Hello how are you?";
console.log(everyOther(message));
