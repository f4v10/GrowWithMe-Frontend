import { Component, OnInit } from '@angular/core';
import { FarmerProductService } from '../../services/farmer-product.service';
import { FarmerProductPriceEntity } from '../../model/farmer-product.entity';

@Component({
  selector: 'app-farmer-product-information',
  templateUrl: './farmer-product-information.component.html',
  styleUrls: ['./farmer-product-information.component.css']
})
export class FarmerProductInformationComponent implements OnInit {
  farmerProducts: FarmerProductPriceEntity[] = [];
  editingProductId: number | null = null;
  editingProduct: FarmerProductPriceEntity = new FarmerProductPriceEntity();
  constructor(private farmerProductService: FarmerProductService) { }

  ngOnInit(): void {
    this.getFarmerProducts();
  }

  getFarmerProducts(): void {
    this.farmerProductService.getFarmerProductPrices().subscribe(
      data => {
        this.farmerProducts = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  startEditing(product: FarmerProductPriceEntity): void {
    this.editingProductId = product.id;
    // Crea una copia del producto para editar
    this.editingProduct = { ...product };
  }

  acceptChanges(): void {
    if (this.editingProduct) {
      this.updateProduct(this.editingProduct);
    }
    this.editingProductId = null;
    this.editingProduct = new FarmerProductPriceEntity();
  }

  updateProduct(product: FarmerProductPriceEntity): void {
    this.farmerProductService.updateFarmerProductPrice(product.id, product).subscribe(
      updatedProduct => {
        // Actualiza el producto en la lista
        const index = this.farmerProducts.findIndex(p => p.id === updatedProduct.id);
        if (index !== -1) {
          this.farmerProducts[index] = updatedProduct;
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteProduct(id: number): void {
    this.farmerProductService.deleteFarmerProductPrice(id).subscribe(
      () => {
        // Llama a getFarmerProducts para actualizar la lista de productos
        this.getFarmerProducts();
      },
      error => {
        console.error(error);
      }
    );
  }
}