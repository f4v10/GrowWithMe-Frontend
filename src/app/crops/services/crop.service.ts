import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {Crop} from "../model/crop.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CropService extends BaseService<Crop>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/crops';
  }
}
