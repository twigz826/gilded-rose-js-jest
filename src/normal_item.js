const {Item} = require("../src/gilded_rose");

class NormalItem extends Item {

  updateQuality() {
    this.sellIn--;
    this.quality--;
    this._sellInBelowZero()
    this._qualityNeverBelowZero()
  }

  _sellInBelowZero() {
    if(this.sellIn < 0) {
      this.quality--
    }
  }

  _qualityNeverBelowZero() {
    if(this.quality < 0) {
      this.quality = 0
    }
  }
}

module.exports = {
  NormalItem
}
