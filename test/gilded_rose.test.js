const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () => {
  it("should degrade the quality and sellIn values by 1 where the sellIn value is over 0", () => {
    const gildedRose = new Shop([new Item("bananas", 20, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(19);
    expect(items[0].quality).toBe(19);
  });

  it("should degrade the quality by 2 where the sellIn value is negative", () => {
    const gildedRose = new Shop([new Item("bananas", -1, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(18);
  });
});
