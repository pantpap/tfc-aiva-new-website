import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuropolComponent } from './europol.component';

describe('EuropolComponent', () => {
  let component: EuropolComponent;
  let fixture: ComponentFixture<EuropolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuropolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuropolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
