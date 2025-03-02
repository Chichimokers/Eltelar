import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProdcutsComponent } from './home-prodcuts.component';

describe('HomeProdcutsComponent', () => {
  let component: HomeProdcutsComponent;
  let fixture: ComponentFixture<HomeProdcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeProdcutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProdcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
