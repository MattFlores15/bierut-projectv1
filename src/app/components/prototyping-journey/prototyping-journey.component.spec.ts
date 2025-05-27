import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrototypingJourneyComponent } from './prototyping-journey.component';

describe('PrototypingJourneyComponent', () => {
  let component: PrototypingJourneyComponent;
  let fixture: ComponentFixture<PrototypingJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrototypingJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrototypingJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
