# DOMAIN MODEL

## Task

Add a new feature to the system so that Conjured items can be sold. Conjured items degrade in Quality twice as fast as normal items

## Pre-existing code

1. SellIn value = number of days the shop has to sell the item

2. Quality value = how valuable the item is

3. Both values are decreased at the end of each day

## Rules

1. Once the sell by date has passed, the Quality value degrades twice as fast

2. The Quality value of an item is never negative

3. "Aged Brie" actually increases in Quality the older it gets

4. The Quality of an item is never more than 50

5. "Sulfuras", being a legendary item, never has to be sold or decreases in Quality. It has a max quality of 80 which never changes.

6. "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

7. Can make changes to the UpdateQuality method and add any new code.

8. Not allowed to alter the Item class or Items property

## Planning

### Understand the code and what it's currently doing

1. General overview
  - Item class creates a new item with three values on initialisation: name, sellIn and quality
  - Items can then be added to the shop class and are stored in an array called "items"
  - updateQuality is a big function that must be run every day to update the values for sellIn and quality

2. updateQuality function
  - Starts with a for loop that goes through the items array
  - If statements are triggered with different treatments for specific items, namely: "Aged Brie", "Backstage passes to a TAFKAL80ETC concert" and "Sulfuras, Hand of Ragnaros".
  - See Comments in the code to understand what each line of the function does

3. Unexpected finding about Aged Brie not clearly stated in the instructions
  - Aged Brie quality goes up by 2 each time once the sellIn value drops below 0

### Writing tests to confirm understanding of core functionality

1. First tests will confirm behaviour of normal items sold at the inn
2. Next tests will test behaviour of items with special rules, being brie and backstage passes
3. Next tests will examine sulfuras and ensure behaviour is in line with expectations based on the flow diagrams
4. Finally, tests can be written to test for the new item to be sold at the inn

### Refactoring

After writing tests to confirm the existing behaviour of the program (point 3 in the previous section), I will begin to refactor the code one category at a time, using my tests to inform where errors are occuring as well as allowing me to make changes that do not interfere with the core functionality of the program. Once I am happy with the refactored code, I will move on to point 4.

### Feature testing

// Run node
$ node

// Require the script
const {Shop, Item} = require("./src/gilded_rose");

// Create shop
const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);

// Allow a day to pass by running the updateQuality function
gildedRose.updateQuality()

// Results
[ Item { name: 'Aged Brie', sellIn: 1, quality: 1 } ]
