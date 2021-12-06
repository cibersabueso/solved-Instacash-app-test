export default class Item {
  public MAXIMUM_QUALITY = 50
  public MINIMUM_QUALITY = 0
  public name!: String;
  public quality!: number;
  public sellIn!: number;

  constructor(name: String, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public updateQuality(): void {
    if (this.quality > this.MINIMUM_QUALITY) {
      this.quality--;
    }

    if (this.sellIn <= 0 && this.quality > this.MINIMUM_QUALITY) this.quality--;

    this.sellIn--;
  }

  getName(): String {
    return this.name;
  }

  getSellIn(): number {
    return this.sellIn;
  }

  getQuality(): number {
    return this.quality;
  }

  setName(name: String): void { this.name = name; }

  setSellIn(sellIn: number): void { this.sellIn = sellIn; }

  setQuality(quality: number): void { this.quality = quality; }
}