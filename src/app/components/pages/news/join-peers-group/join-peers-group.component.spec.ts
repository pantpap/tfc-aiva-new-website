import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinPeersGroupComponent } from './join-peers-group.component';

describe('JoinPeersGroupComponent', () => {
  let component: JoinPeersGroupComponent;
  let fixture: ComponentFixture<JoinPeersGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinPeersGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinPeersGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
