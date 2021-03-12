const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {

  describe("brie", () => {

    it("quality should increase as sellIn value decreases", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(11);
    });

    it("quality should increase by 2 as sellIn value goes below 0", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(12);
    });

    it("quality maxes out at 50", () => {
      const gildedRose = new Shop([new Item("Aged Brie", -5, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe("backstage passes", () => {

    it("quality should increase as sellIn value decreases and sellIn value > 10", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 15)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(16);
    });

    it("quality should increase by 2 where 5 < sellIn value <= 10", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 15)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(17);
    });

    it("quality should increase by 3 where 0 < sellIn value <= 5", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 15)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
    });

    it("quality goes to 0 when sellIn value turns negative", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 15)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });

  describe("sulfuras", () => {

    it("has a quality value of 80 that never changes", () => {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 80, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
    });
  });
});
