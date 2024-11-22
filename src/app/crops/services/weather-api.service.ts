import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeatherCondition} from "../model/weather-condition.entity";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  baseUrl = 'https://www.weatherapi.com/docs';

  constructor(private http: HttpClient) { }

  getWeatherConditions(): Observable<WeatherCondition[]> {
    return this.http.get<WeatherCondition[]>(`${this.baseUrl}/weather_conditions.json`);
  }
}
