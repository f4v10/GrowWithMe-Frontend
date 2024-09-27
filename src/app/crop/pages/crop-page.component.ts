// src/app/crop/pages/crop-page.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { CropService } from '../services/crop.service';
import { Crop } from '../model/crop.model';

@Component({
  selector: 'app-crop-page',
  templateUrl: './crop-page.component.html',
  styleUrls: ['./crop-page.component.css'],
  standalone: true,
  imports: [CommonModule], // Añade CommonModule aquí
})
export class CropPageComponent implements OnInit {
  crops: Crop[] = [];

  constructor(private cropService: CropService) {}

  ngOnInit(): void {
    this.crops = this.cropService.getCrops();
  }
}
