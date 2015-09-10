var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];


//BASICS

//#7. inserting text using vanilla javascript into the DOM
var vanilla_output = document.getElementById("vanilla_output").innerHTML = 'This content generated with vanilla JavaScript';

//#8. inserting text using jquery into the DOM
$('#jquery_output').text('This content generated with jQuery');




//FUNCTION AND OPERATORS

//#1 

function modulus(arg1, arg2) {
  var modulo = arg1 % arg2;
  return modulo;
}

//#2

function doMath(int1, int2, someFunction) {
  return someFunction(int1, int2);
}

function add(int1, int2) {
  return int1 + int2;
}

function subtract(int1, int2) {
  return int1 - int2;
}




// ARRAYS

//#1
function sortedPlanets() {
  var sortArray = Planets.sort();
  return sortArray;
}

//#2
function reversedPlanets() {
  var reversedArray = [];
  for (var i = 0; i < Planets.length; i++) {
    var letters = Planets[i].split("");
    letters.reverse();
    var backwardLetters = letters.join("");
    reversedArray[reversedArray.length] = backwardLetters;
  }
  return reversedArray;
}

//#3
function longPlanets() {
  var longerArray = [];
  for (var i = 0; i < Planets.length; i++) {
    if (Planets[i].charAt(6) !== "") {
      longerArray.push(Planets[i]);
    }
  }
  return longerArray;
}




//XHR

//#1
function getAnimals() {
  $.ajax({
    url: "../data/animals.json"
  }).done(function(data) {
    console.log("animals", data.animals);
  });
}














