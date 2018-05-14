export class User {
  _id?: string;
  firstName: string;
  lastName: string;
  address: any;
  city: string;
  state: string;
  zip: number;
  depaulID: number;
  degree: string;
  email: string;
  userID: string;
  password: string;
  static userType: string;
  constructor(values: Object ={}) {Object.assign(this,values); }
}
