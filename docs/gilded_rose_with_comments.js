class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    // Loops through the array
    for (let i = 0; i < this.items.length; i++) {
      // If item is not aged brie or backstage passes
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        // And if the quality is greater than 0
        if (this.items[i].quality > 0) {
          // And if the item isn't sulfuras
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            // Subtract 1 from the quality
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      // If item is aged brie or backstage passes
      } else {
        // And quality is less than 50
        if (this.items[i].quality < 50) {
          // Add 1 to quality
          this.items[i].quality = this.items[i].quality + 1;
          // If the item is backstage passes
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            // And the sellIn value is 10 or less
            if (this.items[i].sellIn < 11) {
              // And quality is less than 50
              if (this.items[i].quality < 50) {
                // And one more point to the quality (one already added on line 31 so 2 in total)
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            // And the sellIn value is 5 or less
            if (this.items[i].sellIn < 6) {
              // And quality is less than 50
              if (this.items[i].quality < 50) {
                // And another point to the quality (two added on lines 31 and 39 so 3 in total)
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      // sellIn will always -1 unless the name is sulfuras
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      // If sellIn is less than 0
      if (this.items[i].sellIn < 0) {
        // And item is not brie
        if (this.items[i].name != 'Aged Brie') {
          // And item is not backstagePasses
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            // And item has a quality of higher than 0
            if (this.items[i].quality > 0) {
              // And item is not sulfuras
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                // quality is deducted one point
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            // This keeps the quality from going below 0
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          // For brie and backstage passes, quality is increased until it gets to 50
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
