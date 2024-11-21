export class FarmerSignUpRequest {
  constructor(public email: string, public password: string, public confirmPassword: string, public documentType: string, public valueDocumentType: string, public phone: string) {}
}
