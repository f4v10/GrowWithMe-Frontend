import { Routes } from '@angular/router';

import { AddFarmerProductComponent } from './sales/pages/add-farmer-product/add-farmer-product.component';
import { AddSalesComponent } from './sales/pages/add-sales/add-sales.component';
import { FarmerProductInformationComponent } from './sales/pages/farmer-product-information/farmer-product-information.component';
import { SalesInformationComponent } from './sales/pages/sales-information/sales-information.component';
import { SalesOrderListComponent } from './sales/pages/sales-order-list/sales-order-list.component';

export const routes: Routes = [
    {path: '', redirectTo: '/sales/add-farmer-product' , pathMatch: 'full'},
    
    {path:'sales/add-farmer-product', component: AddFarmerProductComponent},
    {path:'sales/add-sales', component: AddSalesComponent},
    {path:'sales/farmer-product-information', component: FarmerProductInformationComponent},
    {path:'sales/sales-information', component: SalesInformationComponent},
    {path:'sales/sales-order-list/:Id', component: SalesOrderListComponent },
    {path: '**', redirectTo: '' },
  
];