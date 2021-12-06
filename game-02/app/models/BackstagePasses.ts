import Item from "./Item";

import { ItemProperties } from "../interfaces";

export default class BackstagePasses extends Item {
  constructor(attributes: ItemProperties) {
    super(attributes.name, attributes.sellIn, attributes.quality);
  }

  public updateQuality(): void {
    this.sellIn--;

    if (this.quality >= this.MAXIMUM_QUALITY) {
      return;
    }

    this.quality++;

    if (this.sellIn < 10) {
      this.quality++;
    }

    if (this.sellIn < 5) {
      this.quality++;
    }

    if (this.sellIn < 0) {
      this.quality = this.MINIMUM_QUALITY;
    }
  }
}
