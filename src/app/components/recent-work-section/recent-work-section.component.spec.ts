import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWorkSectionComponent } from './recent-work-section.component';

describe('RecentWorkSectionComponent', () => {
  let component: RecentWorkSectionComponent;
  let fixture: ComponentFixture<RecentWorkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentWorkSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
