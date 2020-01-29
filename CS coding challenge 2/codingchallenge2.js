function centuryFromYear(year) {

return Math.ceil(year / 100);

}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));



function reverse(message) {
    reverseString = "";
    for (var i=message.length-1; i>=0; i--) {
        reverseString += message.charAt(i);

    }
    return reverseString
}


console.log(reverse("hello"));
console.log(reverse("good"));
 