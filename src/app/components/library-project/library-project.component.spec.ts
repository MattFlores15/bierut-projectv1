import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryProjectComponent } from './library-project.component';

describe('LibraryProjectComponent', () => {
  let component: LibraryProjectComponent;
  let fixture: ComponentFixture<LibraryProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
