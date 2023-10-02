import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalDevelopmentComponent } from './proposal-development.component';

describe('ProposalDevelopmentComponent', () => {
  let component: ProposalDevelopmentComponent;
  let fixture: ComponentFixture<ProposalDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
