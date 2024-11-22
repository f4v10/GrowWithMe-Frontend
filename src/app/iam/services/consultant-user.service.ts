import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {ConsultantUser} from "../model/consultant-user.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultantUserService extends BaseService<ConsultantUser>{

  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = '/consultants';
  }
}
