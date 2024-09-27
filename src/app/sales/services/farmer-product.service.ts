import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environments} from "../../../environments/environment";
import { FarmerProductPriceEntity } from '../model/farmer-product.entity';

@Injectable({
  providedIn: 'root'
})
export class FarmerProductService {
  private baseUrl:string = `${environments.serverBasePath}`;

  constructor(private http: HttpClient) { }

  getFarmerProductPrices(): Observable<FarmerProductPriceEntity[]> {
    return this.http.get<FarmerProductPriceEntity[]>(this.baseUrl);
  }

  getFarmerProductPriceById(id: number): Observable<FarmerProductPriceEntity> {
    return this.http.get<FarmerProductPriceEntity>(`${this.baseUrl}/${id}`);
  }

  createFarmerProductPrice(farmerProductPrice: FarmerProductPriceEntity) {
    const body = {
      productId: farmerProductPrice.productId,
      money: farmerProductPrice.money,
      amount: farmerProductPrice.amount,
      start: farmerProductPrice.start,
      end: farmerProductPrice.end,
      quantityProduct: farmerProductPrice.quantityProduct
    };
    return this.http.post<FarmerProductPriceEntity>(this.baseUrl, body);
  }

  updateFarmerProductPrice(id: number, farmerProductPrice: FarmerProductPriceEntity): Observable<FarmerProductPriceEntity> {
    return this.http.put<FarmerProductPriceEntity>(`${this.baseUrl}/${id}`, farmerProductPrice);
  }

  deleteFarmerProductPrice(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}