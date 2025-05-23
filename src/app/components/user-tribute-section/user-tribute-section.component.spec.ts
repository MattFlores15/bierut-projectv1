import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTributeSectionComponent } from './user-tribute-section.component';

describe('UserTributeSectionComponent', () => {
  let component: UserTributeSectionComponent;
  let fixture: ComponentFixture<UserTributeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserTributeSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTributeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
