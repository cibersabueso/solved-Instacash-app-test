import { Item, AgedBrie, BackstagePasses, Conjured, Sulfuras } from "./models";

type ItemType = AgedBrie | BackstagePasses | Sulfuras | Item;

export class GildedRose {
    items: Array<ItemType>;

    constructor(items: Array<ItemType>) {
        this.items = items;
    }

    public updateQuality(): Array<ItemType> {
        this.items = this.items.map((item: ItemType) => this.qualityUpdater(item))
        return this.items
    }

    private qualityUpdater(item: ItemType): ItemType {
        let itemName: String = item.getName();

        let attributes = {
            name: item.getName(),
            quality: item.getQuality(),
            sellIn: item.getSellIn()
        };


        let ItemTypeSelected: ItemType;
        switch (itemName) {
            case "Aged Brie":
                ItemTypeSelected = new AgedBrie(attributes);
                break;
            case "Backstage passes to a TAFKAL80ETC concert":
                ItemTypeSelected = new BackstagePasses(attributes);
                break;
            case "Sulfuras, Hand of Ragnaros":
                ItemTypeSelected = new Sulfuras(attributes);
                break;
            case "Conjured":
                ItemTypeSelected = new Conjured(attributes);
                break;
            default:
                ItemTypeSelected = new Item(attributes.name, attributes.sellIn, attributes.quality);
                break;
        }
        
        ItemTypeSelected.updateQuality();

        return ItemTypeSelected;
    }
}