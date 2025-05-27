import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineHostComponent } from './timeline-host.component';

describe('TimelineHostComponent', () => {
  let component: TimelineHostComponent;
  let fixture: ComponentFixture<TimelineHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
