import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private seller: SellerService, private router: Router) {}

  ngOnInit(): void {}
  signUp(data: signUp): void {
    console.warn(data);
    this.seller.userSignUp(data).subscribe((result) => {
      if (result) {
        this.router.navigate(['seller-home']);
      }
    });
  }
}
