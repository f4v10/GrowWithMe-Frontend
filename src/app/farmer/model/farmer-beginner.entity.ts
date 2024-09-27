export class FarmerBeginnerEntity {
  id: number;
  DNI: string;
  email: string;
  phone: number;
  socialReason: string;

  constructor() {
    this.id = 0;
    this.DNI = '';
    this.email = '';
    this.phone = 0;
    this.socialReason = '';
  }
}
