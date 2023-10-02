import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterPracticeGuidesComponent } from './better-practice-guides.component';

describe('BetterPracticeGuidesComponent', () => {
  let component: BetterPracticeGuidesComponent;
  let fixture: ComponentFixture<BetterPracticeGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetterPracticeGuidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetterPracticeGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
