const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {

  describe("normal items", () => {

    it("should degrade the quality and sellIn values by 1 where the sellIn value is over 0", () => {
      const gildedRose = new Shop([new Item("bananas", 20, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(19);
      expect(items[0].quality).toBe(19);
    });

    it("should degrade the quality by 2 where the sellIn value is negative", () => {
      const gildedRose = new Shop([new Item("bananas", -1, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
    });

    it("quality can never go below 0", () => {
      const gildedRose = new Shop([new Item("bananas", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });

  });

  describe("brie", () => {

    it("quality should increase as sellIn value decreases", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(11);
    });
  });
});
