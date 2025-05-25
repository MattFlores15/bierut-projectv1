// src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollService } from '../../scroll.service'; // NEW: Import ScrollService
import { CommonModule } from '@angular/common'; // Add CommonModule for ngIf, ngFor etc.

@Component({
  selector: 'app-navbar',
  standalone: true, // Assuming this is a standalone component, if not, remove this
  imports: [OverlayModule, CommonModule], // Add CommonModule
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = false;

  // Define the sections with their IDs for easy linking
  timelineSections = [
    { id: 'start', label: 'Start', image: 'assets/images/MB-PartnerPortrait.png' },
    { id: 'early-career', label: 'Early Career', image: 'assets/images/161271-2331948915.jpeg' },
    { id: 'pentagram-years', label: 'Pentagram', image: 'assets/images/mb_saksfifthavenue_02.png' },
    { id: 'recent-works', label: 'MIT-Lab', image: 'assets/images/mb_mitmedialab_20.png' },
    { id: 'library', label: 'Library Initiative', image: 'assets/images/mb-libraryinitiative-01.png' },
    { id: 'user-tribute', label: 'My Logo', image: 'assets/images/MBierutLogo-v2.png' }
  ];

  constructor(private scrollService: ScrollService) {} // NEW: Inject ScrollService

  // Method to scroll to a section and close the overlay
  goToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.isOpen = false; // Close the overlay after clicking
  }
}