import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUp(data:signUp){
console.warn(data);

  }

}
