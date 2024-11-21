export class ConsultantSignUpRequest {
  constructor(public email: string, public password: string, public confirmPassword: string, public dni: string, public phone: string) {}
}
