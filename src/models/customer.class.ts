export class Customer {
  company: string;
  responsible: string;
  email: string;
  street: string;
  zipCode: number;
  city: string;
  country: string;

  constructor(obj?: any) {
    this.company = obj ? obj.company : '';
    this.responsible = obj ? obj.responsible : '';
    this.email = obj ? obj.email : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
    this.country = obj ? obj.country : '';
  }

  public toJSON() {
    return {
      company: this.company,
      responsible: this.responsible,
      email: this.email,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      country: this.country,
    };
  }
}
