import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-monitoring',
  standalone: true,
  imports: [
    MatButton,
    TranslateModule,
    NgForOf
  ],
  templateUrl: './monitoring.component.html',
  styleUrl: './monitoring.component.css'
})
export class MonitoringComponent implements OnInit {
  farmers = [
    { name: 'Farmer 1', email: 'farmer1@example.com' },
    { name: 'Farmer 2', email: 'farmer2@example.com' }
  ];

  constructor() {}

  ngOnInit(): void {}

  onChat(farmer: any) {
    alert(`Starting chat with ${farmer.name}`);
  }
}
