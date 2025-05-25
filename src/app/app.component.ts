import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EarlyCareerSectionComponent } from './components/early-career-section/early-career-section.component';
import { StartSectionComponent } from './components/start-section/start-section.component';
import { BierutProject, bierutProjects } from './data/bierut-projects';
import { PentagramSectionComponent } from './components/pentagram-section/pentagram-section.component';
import { RecentWorkSectionComponent } from './components/recent-work-section/recent-work-section.component';
import { UserTributeSectionComponent } from './components/user-tribute-section/user-tribute-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LibraryProjectComponent } from './components/library-project/library-project.component';
import { CaseStudyModalComponent } from './components/case-study-modal/case-study-modal.component';
import { ModalService } from './services/modal.service';
import { ScrollService } from './scroll.service';
import { CommonModule } from '@angular/common';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavbarComponent,EarlyCareerSectionComponent, StartSectionComponent, PentagramSectionComponent, RecentWorkSectionComponent,LibraryProjectComponent, UserTributeSectionComponent, CaseStudyModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bierut-projectv1';
  firstProject: BierutProject = bierutProjects[0];
  secondProject: BierutProject = bierutProjects[1];
  thirdProject: BierutProject = bierutProjects[2];
  fourthProject: BierutProject = bierutProjects[3];
  fifthProject: BierutProject = bierutProjects[4];

  @ViewChild('mainScrollContainer', { static: true }) mainScrollContainer!: ElementRef<HTMLElement>; // NEW: ViewChild for the scroll container

  constructor(public modalService: ModalService, private scrollService: ScrollService) {} // NEW: Inject ScrollService

  ngOnInit() {
    // Subscribe to the scroll service to handle navigation requests
    this.scrollService.scrollToSection$.subscribe(sectionId => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement && this.mainScrollContainer) {
        this.mainScrollContainer.nativeElement.scrollTo({
          left: sectionElement.offsetLeft,
          behavior: 'smooth'
        });
      }
    });

    // --- Horizontal Wheel Scrolling Logic ---
    // Listen to wheel events on the main scroll container
    fromEvent(this.mainScrollContainer.nativeElement, 'wheel')
      .pipe(
        throttleTime(50) // Use throttleTime to allow frequent scrolls but prevent overwhelming events
      )
      .subscribe((event: Event) => {
        const wheelEvent = event as WheelEvent; // Cast to WheelEvent for deltaY
        if (this.modalService.isModalOpen$) { // Prevent scrolling the background when modal is open
            return;
        }

        // Check if Ctrl or Shift is pressed to allow native zoom/vertical scroll
        if (wheelEvent.ctrlKey || wheelEvent.shiftKey) {
            return;
        }

        wheelEvent.preventDefault(); // Prevent default vertical scroll behavior

        // Scroll horizontally based on vertical deltaY
        // You can adjust the multiplier (e.g., 2, 3) to control scroll speed
        this.mainScrollContainer.nativeElement.scrollLeft += wheelEvent.deltaY * 1.5;
      });
  }

}
