const {NormalItem} = require("../src/normal_item");

describe("Normal Item", () => {

  it("should degrade the quality and sellIn values by 1 where the sellIn value is over 0", () => {
    const item = new NormalItem("bananas", 20, 20);
    item.updateQuality();
    expect(item.sellIn).toBe(19);
    expect(item.quality).toBe(19);
  });

  it("should degrade the quality by 2 where the sellIn value is negative", () => {
    const item = new NormalItem("bananas", -1, 20);
    item.updateQuality();
    expect(item.quality).toBe(18);
  });

  it("quality can never go below 0", () => {
    const item = new NormalItem("bananas", 0, 0);
    item.updateQuality();
    expect(item.quality).toBe(0);
  });

});
