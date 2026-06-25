export interface UserData {
  title: "Mr" | "Mrs";
  firstName: string;
  lastName: string;
  email: string;
  mobile:string;
  password: string;
  dob: string;
  newsletter: boolean | true;
  optin: boolean | true;
  address: Address;
}

export interface Address {
  country: string;
  address1: string;
  address2: string | null;
  city: string;
  state:string;
  zipcode: string;
}
