import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTelaComponent } from './add-tela.component';

describe('AddTelaComponent', () => {
  let component: AddTelaComponent;
  let fixture: ComponentFixture<AddTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
