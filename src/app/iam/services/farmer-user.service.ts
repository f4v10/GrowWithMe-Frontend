import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {FarmerUser} from "../model/farmer-user.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FarmerUserService extends BaseService<FarmerUser>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/farmers';
  }
}
