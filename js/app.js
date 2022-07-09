let itemNames = ["Tent","Sleeping Bag","Boat"];
let itemPrices = [42,38,674];
let inStock = [true, true, false];

let firstItemName = itemNames[0];
let firstItemPrice = itemPrices[0];


// will push marshmallows to last item in itemNames, add 8 into last spot in item prices, and set in stock to true
itemNames.push("Marshmallows");   
itemPrices.push(8);
inStock.push(true);


// will pull out what we just put in
let lastItemName = itemNames.pop();
let lastItemPrice = itemPrices.pop();
let lastItemStock = inStock.pop();