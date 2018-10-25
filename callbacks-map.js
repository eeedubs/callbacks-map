var wordsArray = ["good", "morning", "vietnam", "robin", "williams"];

function myMap(words, action){
  var output = [];
  words.forEach(function(element){
    output.push(action(element));
  })
  return output;
}

function lengthArray(input){
  return input.length;
}

function upperCase(input){
  return input.toUpperCase();
}

function reverse(input){
  return input.split("").reverse().join("");
}

console.log(myMap(wordsArray, lengthArray));
console.log(myMap(wordsArray, upperCase));
console.log(myMap(wordsArray, reverse));
