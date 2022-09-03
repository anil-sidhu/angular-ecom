import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerHomeComponent } from './seller-home.component';

describe('SellerHomeComponent', () => {
  let component: SellerHomeComponent;
  let fixture: ComponentFixture<SellerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
