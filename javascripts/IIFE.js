// IIFE

//#1
var FruitMaker = function() {
  var fruitArray = ["apples", "bananas", "cherries", "huckleberries"];

//#2
  return {
    getFruits: function() {
      return fruitArray;
    },
    addFruit: function(fruit) {
      fruitArray[fruitArray.length] = fruit;
      return fruitArray;
    }
  };
}();