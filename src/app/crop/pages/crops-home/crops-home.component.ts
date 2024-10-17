import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {Crop} from "../../model/crop.entity";
import {CropService} from "../../services/crop.service";

@Component({
  selector: 'app-crops-home',
  standalone: true,
  imports: [
    NgForOf,
    MatButton,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent
  ],
  templateUrl: './crops-home.component.html',
  styleUrl: './crops-home.component.css'
})
export class CropsHomeComponent implements OnInit{
  crops: Crop[] = [];

  constructor(private cropService: CropService) {}

  ngOnInit(): void {
    this.getAllCrops();
  }

  getAllCrops() {
    this.cropService.getAll().subscribe(crops => {
      this.crops = crops;
    });
  }
}
