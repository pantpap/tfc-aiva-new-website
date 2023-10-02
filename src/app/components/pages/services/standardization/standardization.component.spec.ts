import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardizationComponent } from './standardization.component';

describe('StandardizationComponent', () => {
  let component: StandardizationComponent;
  let fixture: ComponentFixture<StandardizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandardizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
