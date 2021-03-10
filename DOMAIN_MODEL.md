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

### Feature testing

// Run node
$ node

// Require the script
const {Shop, Item} = require("./src/gilded_rose");

// Define items
let banana = new Item("banana", 50, 50)
let brie = new Item("Aged Brie", 45, 45)
let backstagePasses = new Item("Backstage passes to a TAFKAL80ETC concert", 40, 40)
let sulfuras = new Item("Sulfuras, Hand of Ragnaros", 80, 80)
let apple = new Item("apple", 20, 20)
let veryRipePear = new Item("pear", 1, 20)

// Create shop
const gildedRose = new Shop([banana, brie, backstagePasses, sulfuras, apple, veryRipePear])

// Allow two days to pass by running the updateQuality function
gildedRose.updateQuality()
gildedRose.updateQuality()

// Results
Quality and sellIn for banana and apple decrease by 2
Quality for brie and backstagePasses increases by 2, sellIn decreases by 2
Quality and sellIn for sulfuras does not change
SellIn for veryRipePear descreases to -1 and then Quality decreases by 3
Quality has a max of 50 and a min of 0
