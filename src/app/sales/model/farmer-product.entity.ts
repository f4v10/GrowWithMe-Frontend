export class FarmerProductPriceEntity {
    id: number;
    productId: number;
    money: string;
    amount: number;
    start: string; // ISO 8601 date-time string
    end: string; // ISO 8601 date-time string
    quantityProduct: number;
    constructor() {
      this.productId = 0;
      this.money = "";
      this.amount = 0;
      this.start = "";
      this.end = "";
      this.quantityProduct = 0;
      this.id=0;
    }
}