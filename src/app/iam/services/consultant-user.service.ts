import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {ConsultantUser} from "../model/consultant-user.entity";

@Injectable({
  providedIn: 'root'
})
export class ConsultantUserService extends BaseService<ConsultantUser>{

  constructor() {
    super();
    this.resourceEndPoint = '/consultant-user';
  }
}
