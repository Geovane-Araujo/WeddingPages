import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsProductsComponent } from './gifts-products.component';

describe('GiftsProductsComponent', () => {
  let component: GiftsProductsComponent;
  let fixture: ComponentFixture<GiftsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
