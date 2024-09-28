import { Injectable } from '@angular/core';
import {FarmerBigEntity} from "../model/farmer-big.entity";
import {BaseService} from "../../shared/services/base.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerBigService extends BaseService<FarmerBigEntity> {
  constructor() {
    super();
    this.resourceEndPoint = '/farmer-beginner';
  }
}
