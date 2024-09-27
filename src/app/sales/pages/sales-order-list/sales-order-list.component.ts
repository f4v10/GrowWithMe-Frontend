import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from '../../services/sales.service';
import { SalesOrderEntity } from '../../model/sales-order.entity';
import { FarmerProductService } from '../../services/farmer-product.service';
import { FarmerProductPriceEntity } from '../../model/farmer-product.entity';

@Component({
  selector: 'app-sales-order-list',
  templateUrl: './sales-order-list.component.html',
  styleUrl: './sales-order-list.component.css'
})
export class SalesOrderListComponent implements OnInit {
  id: number=0;
  salesOrder: SalesOrderEntity = new SalesOrderEntity();
  farmerProducts: FarmerProductPriceEntity[] = [];
  productId: number = 0;
  constructor(
    private route: ActivatedRoute,
    private salesService: SalesService,
    private farmerProductService: FarmerProductService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('Id');
    this.id = idParam ? +idParam : 0; // Si idParam es null, se asignará 0 a this.id
    this.getSalesOrder();
    this.getFarmerProducts(); // Llama a la nueva función aquí
  }

  getFarmerProducts(): void {
    this.farmerProductService.getFarmerProductPrices()
      .subscribe(
        products => {
          this.farmerProducts = products;
        },
        error => {
          console.error(error);
        }
      );
  }

  getSalesOrder(): void {
    this.salesService.getSalesOrder(this.id)
      .subscribe(
        order => {
          this.salesOrder = order;
        },
        error => {
          console.error(error);
        }
      );
  }
  addProductToOrder(productId: number): void {
    this.salesService.addFarmerProductToSalesOrder(this.id, productId)
      .subscribe(
        order => {
          this.salesOrder = order;
        },
        error => {
          console.error(error);
        }
      );
  }
}