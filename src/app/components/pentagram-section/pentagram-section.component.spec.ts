import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PentagramSectionComponent } from './pentagram-section.component';

describe('PentagramSectionComponent', () => {
  let component: PentagramSectionComponent;
  let fixture: ComponentFixture<PentagramSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PentagramSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PentagramSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
