import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesOrderEntity } from '../model/sales-order.entity';
import {environments} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private baseUrl:string = `${environments.serverBasePath}`;

  constructor(private http: HttpClient) { }

  createSalesOrder(salesOrder: { ruc: number, orderTimestamp: string, invoiceId: string }): Observable<SalesOrderEntity> {
    return this.http.post<SalesOrderEntity>(this.baseUrl, salesOrder);
  }

  updateSalesOrder(id: number, salesOrder: { ruc: number, orderTimestamp: string, invoiceId: string }): Observable<SalesOrderEntity> {
    return this.http.put<SalesOrderEntity>(`${this.baseUrl}/${id}`, salesOrder);
  }

  addFarmerProductToSalesOrder(salesOrderId: number, productId: number): Observable<SalesOrderEntity> {
    const url = `${this.baseUrl}/${salesOrderId}/items/${productId}`;
    return this.http.put<SalesOrderEntity>(url, null);
  }
  deleteSalesOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  getSalesOrders(): Observable<SalesOrderEntity[]> {
    return this.http.get<SalesOrderEntity[]>(this.baseUrl);
  }
  getSalesOrder(id: number): Observable<SalesOrderEntity> {
    return this.http.get<SalesOrderEntity>(`${this.baseUrl}/${id}`);
  }


}