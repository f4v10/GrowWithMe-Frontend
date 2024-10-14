import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {FarmerUser} from "../model/farmer-user.entity";

@Injectable({
  providedIn: 'root'
})
export class FarmerUserService extends BaseService<FarmerUser>{

  constructor() {
    super();
    this.resourceEndPoint = '/farmerUsers';
  }
}
