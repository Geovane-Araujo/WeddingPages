import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsProductComponent } from './gifts-product.component';

describe('GiftsProductComponent', () => {
  let component: GiftsProductComponent;
  let fixture: ComponentFixture<GiftsProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftsProductComponent]
    });
    fixture = TestBed.createComponent(GiftsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
