import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {Crop} from "../../model/crop.entity";
import {CropService} from "../../services/crop.service";
import {WeatherCondition} from "../../model/weather-condition.entity";
import {WeatherApiService} from "../../services/weather-api.service";
import {TranslateModule} from "@ngx-translate/core";

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
    MatCardContent,
    NgIf,
    TranslateModule
  ],
  templateUrl: './crops-home.component.html',
  styleUrl: './crops-home.component.css'
})
export class CropsHomeComponent implements OnInit{
  crops: Crop[] = [];
  weatherConditions: WeatherCondition[] = [];

  codes: number[] = [];
  selectedWeatherCondition: WeatherCondition | null = null;

  constructor(private cropService: CropService, private weatherApi: WeatherApiService) {}

  ngOnInit(): void {
    this.getAllCrops();
    this.getAllWeatherConditions();
  }

  getAllCrops() {
    this.cropService.getAll().subscribe((data: any) => {
      this.crops = data['crops'];
      console.log(this.crops);
    });
  }

  getAllWeatherConditions() {
    this.weatherApi.getWeatherConditions().subscribe((conditions: WeatherCondition[]) => {
      this.weatherConditions = conditions;
      this.codes = this.weatherConditions.map(condition => condition.code);
      this.rollDice();
      console.log(this.weatherConditions);
    });
  }

  rollDice() {
    const randomCode = this.codes[Math.floor(Math.random() * this.codes.length)];
    this.selectedWeatherCondition = this.weatherConditions.find(condition => condition.code === randomCode) || null;
    console.log(randomCode);
  }
}
