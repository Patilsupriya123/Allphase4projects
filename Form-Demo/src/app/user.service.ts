import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser()
  {
      return {name:"supriya",email:"supriya@gmail.com",address:"solapur"};
  }
}