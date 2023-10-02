import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptualArchitectureComponent } from './conceptual-architecture.component';

describe('ConceptualArchitectureComponent', () => {
  let component: ConceptualArchitectureComponent;
  let fixture: ComponentFixture<ConceptualArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptualArchitectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptualArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
