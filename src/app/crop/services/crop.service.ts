
import { Injectable } from '@angular/core';
import { Crop } from '../model/crop.model';

@Injectable({
  providedIn: 'root',
})
export class CropService {
  private crops: Crop[] = [
    {
      code: 'AC856',
      area: '100 m2',
      product: 'Arroz',
      status: 'Germinación',
      cost: 500,
      payback: 1000,
      localization: '-11.916079261979382, -76.66335880701656',
      notifications: 'None',
    },
  ];

  getCrops(): Crop[] {
    return this.crops;
  }
}
