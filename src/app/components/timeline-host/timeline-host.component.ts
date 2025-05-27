import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common'; // For *ngIf, *ngFor, async pipe
import { BierutProject, bierutProjects } from '../../data/bierut-projects'; // Adjust path
import { ScrollService } from '../../scroll.service'; // Adjust path
import { ModalService } from '../../services/modal.service'; // Adjust path
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

// Import all section components used in the template
import { NavbarComponent } from '../navbar/navbar.component'; // Adjust path
import { StartSectionComponent } from '../start-section/start-section.component'; // Adjust path
import { EarlyCareerSectionComponent } from '../early-career-section/early-career-section.component'; // Adjust path
import { PentagramSectionComponent } from '../pentagram-section/pentagram-section.component'; // Adjust path
import { RecentWorkSectionComponent } from '../recent-work-section/recent-work-section.component'; // Adjust path
import { LibraryProjectComponent } from '../library-project/library-project.component'; // Adjust path
import { UserTributeSectionComponent } from '../user-tribute-section/user-tribute-section.component'; // Adjust path


@Component({
  selector: 'app-timeline-host',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    StartSectionComponent,
    EarlyCareerSectionComponent,
    PentagramSectionComponent,
    RecentWorkSectionComponent,
    LibraryProjectComponent,
    UserTributeSectionComponent
    // Add other necessary modules/components if any
  ],
  templateUrl: './timeline-host.component.html',
  styleUrls: ['./timeline-host.component.css'] // Create this file if needed
})
export class TimelineHostComponent implements OnInit {
  firstProject: BierutProject = bierutProjects[0];
  secondProject: BierutProject = bierutProjects[1];
  thirdProject: BierutProject = bierutProjects[2];
  fourthProject: BierutProject = bierutProjects[3];
  fifthProject: BierutProject = bierutProjects[4];

  @ViewChild('mainScrollContainer', { static: true }) mainScrollContainer!: ElementRef<HTMLElement>;

  constructor(private scrollService: ScrollService, public modalService: ModalService) {} // modalService might not be needed here if modal is global

  ngOnInit() {
    this.scrollService.scrollToSection$.subscribe(sectionId => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement && this.mainScrollContainer) {
        this.mainScrollContainer.nativeElement.scrollTo({
          left: sectionElement.offsetLeft,
          behavior: 'smooth'
        });
      }
    });

    fromEvent(this.mainScrollContainer.nativeElement, 'wheel')
      .pipe(throttleTime(50))
      .subscribe((event: Event) => {
        const wheelEvent = event as WheelEvent;
        if (this.modalService.isModalOpen$) { // Check if modalService should be here or if AppComponent handles this globally
            return;
        }
        if (wheelEvent.ctrlKey || wheelEvent.shiftKey) {
            return;
        }
        wheelEvent.preventDefault();
        this.mainScrollContainer.nativeElement.scrollLeft += wheelEvent.deltaY * 1.5;
      });
  }
}