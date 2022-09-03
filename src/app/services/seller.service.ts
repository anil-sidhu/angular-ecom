import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { signUp } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  userSignUp(data:signUp){
    return this.http.post('http://localhost:3000/seller',data)
  }
}
