console.log("Question 1.");

var string="iceberg";
function truncateString(string) {
    if (string.length > 4) {
      console.log(string.slice(0, 4) + "...");
    } else {
      console.log(string);
    }
}
truncateString("icedd");



console.log("\nQuestion 2");

var string="hello boy"
var result=string.replace(/\s/g,"")
console.log(result);



console.log("\nQuestion 3");

var string="hello boy";
var strSplit=string.split(" ");
var firstWord=strSplit[0];
var secondWord=strSplit[1];
// var thirdWord=firstWord;
// secondWord=thirdWord;
// firstWord=secondWord;
console.log(secondWord, firstWord);



console.log("\nQuestion 4");

var string="apple"
var result=string.replace(/a/g,"x")
console.log(result);



console.log("\nQuestion 5");

console.log("Split method can be used to convert string into array");



console.log("\nQuestion 6");

console.log("Includes method can be used to check the occurrence of a specified text in a string");



console.log("\nQuestion 7");

var str = "Hello World!\nThis is my string";
console.log(str);



console.log("\nQuestion 8");
var string ="boy";
if(string.startsWith(string[0].toLowerCase())){
    console.log(true);
}else{
    console.log(false);
}



console.log("\nQuestion 9");



console.log("\nQuestion 10");
var string="helloworld";
var upper=string.toUpperCase();
console.log("a) "+upper);
var firstUpper=string[0].toUpperCase()+string.slice(1,string.length);
console.log("b) "+firstUpper);
var lower=string.toLowerCase();
console.log("c) "+lower);
var firstHalf=string.slice(0,string.length/2)
var secondHalf=string.slice(string.length/2,string.length)
console.log("d) "+secondHalf+firstHalf);
var repeat=string.match(/([a-z])\1+/g)
console.log("e) "+  repeat);
var reverse=string.split("").reverse().join("");
console.log("f) "+reverse);