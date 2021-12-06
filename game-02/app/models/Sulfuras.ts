import Item from "./Item";

import { ItemProperties } from "../interfaces";

export default class Sulfuras extends Item {
  constructor(attributes: ItemProperties) {
    super(attributes.name, attributes.sellIn, attributes.quality);
  }

  public updateQuality(): void {
    // Nunca se altera
    this.quality = 80;
  }
}
