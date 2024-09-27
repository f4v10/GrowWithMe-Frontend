import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FarmerProductService } from '../../services/farmer-product.service';
import {FarmerProductPriceEntity} from '../../model/farmer-product.entity';
import {response} from "express";
@Component({
  selector: 'app-add-farmer-product',
  templateUrl: './add-farmer-product.component.html',
  styleUrls: ['./add-farmer-product.component.css']
})
export class AddFarmerProductComponent  {
  farmerProductForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private farmerProductService: FarmerProductService
  ) {}
  
  id=0;
  productId=0;
  money='';
  amount=0;
  start='';
  end='';
  quantityProduct=0;

  addFarmerProduct() {

    const farmerProduct = new FarmerProductPriceEntity();
    farmerProduct.id = this.id;
    farmerProduct.productId = this.productId;
    farmerProduct.money = this.money;
    farmerProduct.amount = this.amount;
    farmerProduct.start = this.start;
    farmerProduct.end = this.end;
    farmerProduct.quantityProduct = this.quantityProduct;

    this.farmerProductService.createFarmerProductPrice(farmerProduct)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.error(farmerProduct)
          console.error(error);
        }
      );
  }
}