# One Quiz to Rule Them All

> **Instructions:**
>
> Fork this repository into your Github account. Any questions that require you to answer in your own words, but not write code (e.g. question 12) just edit this README with your answer.

## Setup

```
cd lib && bower install
cd ..
http-server
```

## Basics

> For this section, I wrote some starter DOM elements in the `index.html` file.

1. Write a selector that selects only the first sibling li elements.
2. Make all li elements behave as inline elements. -->
3. Only the odd section elements should have a border.
4. Only the even li elements should have a lime background.
5. Only the first aside element in the 2nd section should have blue font color.
6. There are three div elements with instructions inside them about which side of the screen they should be displayed on. Follow those instructions.
7. Using vanilla JavaScript, update the HTML of the element with the id of `vanilla_output` with the following text: "This content generated with vanilla JavaScript".
8. Using jQuery, update the HTML of the element with the id of `jquery_output` with the following text: "This content generated with jQuery".

## JavaScript concepts
1. Explain what hoisting is. Provide your answer below.

**Student answer: **

By default, Javascript moves all declarations to the top of the current scope.  This allows variables to be used before they are declared.  It is good practice to declare variables at the top of the current scope to reduce the chance of bugs.*

  
1. What is a callback? Why do we use them in JavaScript? Provide your answer, and code a simple example below.

  **Student answer: **

A callback function takes other functions as arguments.  When a function is passed into another function within the code it is called a callback function.

Example of a callback function:

  function processArray(arr, callback) {
    var resultArr = new Array(); 
    for (var i = arr.length-1; i >= 0; i--)
        resultArr[i] = callback(arr[i]);
    return resultArr;
  }

  var arr = [1, 2, 3, 4];
  var arrReturned = processArray(arr, function(arg) {return arg * -1;});
  // arrReturned would be [-1, -2, -3, -4]
    

## Functions and operators

> In `main.js` do the following:

1. Write a function named `modulus` that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments.  e.g. `modulus(10, 3) // Should return 1`.
1. Write a function named `doMath`. This function takes three arguments.  The first two will contain integer values. The third argument will be a function reference. Write two more functions named `add` and `subtract`. Execute the `doMath` function to add two numbers together. Then execute the `doMath` function to subtract the two numbers.

## Arrays

> In the `main.js`, I started you off with a simple array.

1. Write a function named `sortedPlanets` that returns an array of the planet names sorted alphabetically.
1. Write a function named `reversedPlanets` that returns an array of planet names that are reversed (i.e. "htraE").
1. Write a function named `longPlanets` that returns an array containing only the planet names that are 7 characters long, or longer.

## IIFE

1. In the file named `IIFE.js`. Write an IIFE that defines a global variable named **FruitMaker**. It should contain a private array holding the following strings: "apples", "bananas", "cherries", "huckleberries".
1. The IIFE should expose in its public interface a getter named `getFruits()` that returns all fruits, and a setter named `addFruit()` that provides the ability to add a new fruit to the array.
1. In the file named `AugmentedIIFE.js`, augment **FruitMaker** with a function named `slices()` that accepts two arguments: the name of the fruit, and the number of slices to make. It should return an array containing the name of the fruit duplicated how ever many slices was requested.

  For example: `slices("apples", 2)` should return `["apples", "apples"]`

## XHR

1. Write a function named `getAnimals` that uses the jQuery `ajax` method to retrieve the `data/animals.json` file. When you execute the functions, it should just log *just the array* of animals to the console when the async is complete. Make sure you provide a prompt of "animals" when logging the array.
1. What are the four HTTP verbs that you can use in an XHR that correspond to the CRUD actions (create, read, update, delete)?
  **Student answer:**
      create = POST 
      read = GET 
      update = PUT 
      delete = DELETE

1. Why did we use Promises when dealing with asynchronous XHR calls?
  **Student answer:**

The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.  Promises is used because Javascript code will run before an ajax call is completed. 

1. Provide a simple example of the syntax for handling a Promise.
  **Student answer:**

```
function getAnimals() {
  var deferred = Q.defer();

  $.ajax({ url: "../data/animals.json" 
    })
    .done(function(data) {
      deferred.resolve(data);
    })
    .fail(function(xhr, status, error) {
      deferred.reject(error);
    });

  return deferred.promise;
}

var promised = getAnimals();

promised.then(function(data) {
  console.log("animals", data.animals);
})
```


## Scope and this

What gets logged to the console when the following code executes? Explain why.

**Student answer: **

```
var answer = "42";                  <---defined in global scope

function steve() {
  luke();                           <---calls luke
}

function luke() {
  var answer = "0";                 <---defined to luke
  greg(answer);                     <---passed to greg
}

function greg(answer) {
  var answer = "666";               <---defined to greg
  console.log( this.answer );       <---refers to where the call was made
}

steve();                            <---global call
```

