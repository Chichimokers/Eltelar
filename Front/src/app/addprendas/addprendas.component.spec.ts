import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprendasComponent } from './addprendas.component';

describe('AddprendasComponent', () => {
  let component: AddprendasComponent;
  let fixture: ComponentFixture<AddprendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddprendasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
