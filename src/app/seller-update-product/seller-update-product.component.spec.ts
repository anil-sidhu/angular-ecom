import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUpdateProductComponent } from './seller-update-product.component';

describe('SellerUpdateProductComponent', () => {
  let component: SellerUpdateProductComponent;
  let fixture: ComponentFixture<SellerUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerUpdateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
