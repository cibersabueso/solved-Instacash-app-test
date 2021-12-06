import Item from "./Item";

import { ItemProperties } from "../interfaces";


export default class Conjured extends Item {
  
  constructor(attributes: ItemProperties) {
    super(attributes.name, attributes.sellIn, attributes.quality);
  }

  private degradeQuatily(): void {
    if (this.quality > this.MINIMUM_QUALITY) this.quality--;

    if (this.sellIn <= 0 && this.quality > this.MINIMUM_QUALITY) {
      this.quality--;
    }
  }

  public updateQuality(): void {
    if (this.sellIn === 5) {
      this.quality -= 3
    } else {
      // Primera vez de degradación
      this.degradeQuatily()

      // Segunda vez de degradación
      this.degradeQuatily()
    }
    this.sellIn--;
  }
}
