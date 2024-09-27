import { Component, OnInit } from '@angular/core';
import { SalesOrderEntity } from '../../model/sales-order.entity';
import { SalesService } from '../../services/sales.service';

@Component({
  selector: 'app-sales-information',
  templateUrl: './sales-information.component.html',
  styleUrls: ['./sales-information.component.css']
})
export class SalesInformationComponent implements OnInit {
  salesOrders: SalesOrderEntity[] = [];
  editingOrderId: number | null = null;
  editingOrder: SalesOrderEntity = new SalesOrderEntity();

  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.getSalesOrders();
  }

  getSalesOrders(): void {
    this.salesService.getSalesOrders()
      .subscribe(
        orders => {
          this.salesOrders = orders;
        },
        error => {
          console.error(error);
        }
      );
  }

  startEditing(order: SalesOrderEntity): void {
    this.editingOrderId = order.id;
    // Clona el objeto para evitar la edición en tiempo real
    this.editingOrder = { ...order };
  }

  acceptChanges(): void {
    if (this.editingOrder) {
      this.updateOrder(this.editingOrder);
    }
    this.editingOrderId = null;
    this.editingOrder = new SalesOrderEntity();
  }
  updateOrder(order: SalesOrderEntity): void {
    this.salesService.updateSalesOrder(order.id, order)
      .subscribe(
        updatedOrder => {
          // Actualiza el producto en la lista
          const index = this.salesOrders.findIndex(p => p.id === updatedOrder.id);
          if (index !== -1) {
            this.salesOrders[index] = updatedOrder;
          }
        },
        error => {
          console.error(error);
        }
      );
  }
}