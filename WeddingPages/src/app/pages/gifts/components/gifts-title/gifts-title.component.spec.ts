import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsTitleComponent } from './gifts-title.component';

describe('GiftsTitleComponent', () => {
  let component: GiftsTitleComponent;
  let fixture: ComponentFixture<GiftsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftsTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
