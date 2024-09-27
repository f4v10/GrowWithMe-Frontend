export class SalesOrderEntity {
    id: number;
    ruc: number;
    orderTimestamp: string;
    invoiceId: string;
    farmerProductPriceIds: number[];
  
  
    constructor() {
      this.id = 0;
      this.ruc = 0;
      this.orderTimestamp = "";
      this.invoiceId = "";
      this.farmerProductPriceIds = [];
    }
  }
