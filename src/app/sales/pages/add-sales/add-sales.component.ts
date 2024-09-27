import { Component } from '@angular/core';
import { SalesService } from '../../services/sales.service';
import { SalesOrderEntity } from '../../model/sales-order.entity';

@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.css']
})
export class AddSalesComponent {
  ruc = 0;
  orderTimestamp = '';
  invoiceId = '';

  constructor(private salesService: SalesService) { }

  addSalesOrder() {
    const salesOrder = new SalesOrderEntity();
    salesOrder.ruc = this.ruc;
    salesOrder.orderTimestamp = this.orderTimestamp;
    salesOrder.invoiceId = this.invoiceId;

    this.salesService.createSalesOrder(salesOrder)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(salesOrder);
          console.error(error);
        }
      );
  }
}