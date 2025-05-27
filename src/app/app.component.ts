// app.component.ts
import { Component } from '@angular/core'; // Removed OnInit, ViewChild, ElementRef, HostListener if not used
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CaseStudyModalComponent } from './components/case-study-modal/case-study-modal.component'; // Keep if modal is here
import { PrototypingJourneyComponent } from './components/prototyping-journey/prototyping-journey.component'; // Keep for standalone imports
import { ModalService } from './services/modal.service';
// Remove imports for sections, BierutProject data, ScrollService, etc. if they fully moved to TimelineHostComponent
// Keep NavbarComponent only if it's used globally outside router-outlet here. (It was inside mainScrollContainer)

@Component({
  selector: 'app-root',
  standalone: true, // Ensure AppComponent is also standalone
  imports: [
    RouterOutlet,
    CommonModule,
    CaseStudyModalComponent, // If modal is global
    // PrototypingJourneyComponent // Not directly used in template, but router loads it
    // NavbarComponent // Only if navbar is global and outside router-outlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bierut-projectv1';
  // Remove project data (firstProject, etc.)
  // Remove @ViewChild('mainScrollContainer')
  // Remove scrollService injection and ngOnInit logic for scrolling

  constructor(public modalService: ModalService) {} // Keep ModalService for the global modal

  // ngOnInit() might be empty or handle other app-level initializations
}