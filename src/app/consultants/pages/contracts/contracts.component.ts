import {Component, OnInit} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-contracts',
  standalone: true,
  imports: [
    TranslateModule,
    MatButton
  ],
  templateUrl: './contracts.component.html',
  styleUrl: './contracts.component.css'
})
export class ContractsComponent implements OnInit {
  contracts = [
    { name: 'Contrato 1' },
    { name: 'Contrato 2' },
    { name: 'Contrato 3' }
  ];

  constructor() {}

  ngOnInit(): void {}

  onAccept(contract: any) {
    alert(`Accepted ${contract.name}`);
  }

  onDecline(contract: any) {
    alert(`Declined ${contract.name}`);
  }
}
