export class ConsultantUser {
  id: number;
  email: string;
  password: string;
  dni: string;
  phone: string;

  constructor() {
    this.id = 0;
    this.email = "";
    this.password = "";
    this.dni = "";
    this.phone = "";
  }
}
