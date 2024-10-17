import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Crop} from "../model/crop.entity";

@Injectable({
  providedIn: 'root'
})
export class CropService extends BaseService<Crop>{

  constructor() {
    super();
    this.resourceEndPoint = '/crops';
  }
}
