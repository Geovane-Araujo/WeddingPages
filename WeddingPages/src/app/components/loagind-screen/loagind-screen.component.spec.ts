import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoagindScreenComponent } from './loagind-screen.component';

describe('LoagindScreenComponent', () => {
  let component: LoagindScreenComponent;
  let fixture: ComponentFixture<LoagindScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoagindScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoagindScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
