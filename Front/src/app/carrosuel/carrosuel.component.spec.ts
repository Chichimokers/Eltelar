import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosuelComponent } from './carrosuel.component';

describe('CarrosuelComponent', () => {
  let component: CarrosuelComponent;
  let fixture: ComponentFixture<CarrosuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrosuelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrosuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
