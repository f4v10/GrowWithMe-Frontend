export class FarmerUser {
  id: number;
  email: string;
  password: string;
  documentType: string;
  valueDocumentType: string;
  phone: string;

  constructor() {
    this.id = 0;
    this.email = "";
    this.password = "";
    this.documentType = "";
    this.valueDocumentType = "";
    this.phone = "";
  }
}
