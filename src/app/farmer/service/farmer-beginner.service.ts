import { Injectable } from '@angular/core';
import {FarmerBeginnerEntity} from "../model/farmer-beginner.entity";
import {BaseService} from "../../shared/services/base.service"; // Asegúrate de que esté la ruta correcta
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerBeginnerService extends BaseService<FarmerBeginnerEntity> {
  constructor() {
    super();
    this.resourceEndPoint = '/farmer-beginner';
  }
}
