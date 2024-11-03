import {Component, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FarmerUser} from "../../../model/farmer-user.entity";
import {FarmerUserService} from "../../../services/farmer-user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-farmer-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    FormsModule,
    TranslateModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class FarmerLoginComponent implements OnChanges, OnInit {
  password = "";
  documentType = "";
  valueDocumentType = "";

  inputDNI = document.getElementById("DNI");
  inputRUC = document.getElementById("RUC");

  protected farmerUserService: FarmerUserService = inject(FarmerUserService);
  protected farmerUserData: FarmerUser;
  protected dataSource!: MatTableDataSource<any>;

  protected invalidUrl: string;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.dataSource = new MatTableDataSource();
    this.farmerUserData = new FarmerUser();
    this.invalidUrl = '';
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['documentType']) {
      if (this.documentType === "DNI") {
        if (this.inputDNI) {
          this.inputDNI.style.display = "block";
        }
        if (this.inputRUC) {
          this.inputRUC.style.display = "none";
        }
      } else {
        if (this.inputDNI) {
          this.inputDNI.style.display = "none";
        }
        if (this.inputRUC) {
          this.inputRUC.style.display = "block";
        }
      }
    }
  }

  ngOnInit(): void {
    this.invalidUrl = this.route.snapshot.url.map(element => element.path).join('/');
  }

  logIn() {
    this.farmerUserService.create(this.farmerUserData).subscribe((response: FarmerUser) => {
      this.dataSource.data.push(response);
      this.dataSource.data = this.dataSource.data;
    })

    this.router.navigate(['/farmer/home/crops']).then();
  }

  onNavigateRegister() {
    this.router.navigate(['/farmer-signup']).then();
  }

  onNavigateConsultantLogin() {
    this.router.navigate(['/consultant-login']).then();
  }
}
