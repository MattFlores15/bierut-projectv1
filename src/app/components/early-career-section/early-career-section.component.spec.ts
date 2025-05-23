import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyCareerSectionComponent } from './early-career-section.component';

describe('EarlyCareerSectionComponent', () => {
  let component: EarlyCareerSectionComponent;
  let fixture: ComponentFixture<EarlyCareerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarlyCareerSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarlyCareerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
