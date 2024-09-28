// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-add-farmer.component',
//   standalone: true,
//   imports: [],
//   templateUrl: './add-farmer.component.component.html',
//   styleUrl: './add-farmer.component.component.css'
// })
// export class AddFarmerComponentComponent {
//
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FarmerBeginnerService} from "../../service/farmer-beginner.service";
import { FarmerBigService } from '../../service/farmer-big.service';
import {FarmerBeginnerEntity} from "../../model/farmer-beginner.entity";
import { FarmerBigEntity } from '../../model/farmer-big.entity';

@Component({
  selector: 'app-add-farmer',
  standalone: true,
  imports: [],
  templateUrl: './add-farmer.component.component.html',
  styleUrl: './add-farmer.component.component.css'
})

export class AddFarmerComponent implements OnInit {
  farmerForm!: FormGroup;  // El formulario reactivo
  farmerType: string = 'beginner';  // Valor predeterminado

  constructor(
    private fb: FormBuilder,
    private beginnerService: FarmerBeginnerService,
    private bigService: FarmerBigService
  ) {}

  ngOnInit(): void {
    // Inicializar el formulario usando FormBuilder
    this.farmerForm = this.fb.group({
      type: [this.farmerType, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      socialReason: ['', Validators.required],
      dni: [''],  // Para Beginner
      ruc: ['']   // Para Big
    });

    // Escuchar cambios en el tipo de agricultor y actualizar las validaciones dinámicas
    this.farmerForm.get('type')?.valueChanges.subscribe((type) => {
      this.farmerType = type;
      this.toggleFarmerFields(type);
    });
  }

  // Cambiar dinámicamente las validaciones en función del tipo de agricultor
  toggleFarmerFields(type: string) {
    if (type === 'beginner') {
      this.farmerForm.get('dni')?.setValidators([Validators.required]);
      this.farmerForm.get('ruc')?.clearValidators();
    } else {
      this.farmerForm.get('ruc')?.setValidators([Validators.required]);
      this.farmerForm.get('dni')?.clearValidators();
    }

    // Llamar a updateValueAndValidity para aplicar cambios de validación
    this.farmerForm.get('dni')?.updateValueAndValidity();
    this.farmerForm.get('ruc')?.updateValueAndValidity();
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.farmerForm.valid) {
      if (this.farmerType === 'beginner') {
        const beginnerFarmer: FarmerBeginnerEntity = {
          id: 0,
          DNI: this.farmerForm.value.dni,
          email: this.farmerForm.value.email,
          phone: this.farmerForm.value.phone,
          socialReason: this.farmerForm.value.socialReason,
        };
        this.beginnerService.create(beginnerFarmer).subscribe(response => {
          console.log('Beginner farmer added', response);
        });
      } else {
        const bigFarmer: FarmerBigEntity = {
          id: 0,
          ruc: this.farmerForm.value.ruc,
          email: this.farmerForm.value.email,
          phone: this.farmerForm.value.phone,
          socialReason: this.farmerForm.value.socialReason,
        };
        this.bigService.create(bigFarmer).subscribe(response => {
          console.log('Big farmer added', response);
        });
      }
    }
  }
}
