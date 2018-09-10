var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:

var max = ingredients.length;
var num = 0;

while (max > num) {
  console.log("while "+ ingredients[num])
  num++;
}

for (var i = 0; i <= max; i++) {
  console.log("for " + ingredients[i]);
}

for(var j = max; j >= 0; j--) {
  console.log("rev " + ingredients[j]);
}