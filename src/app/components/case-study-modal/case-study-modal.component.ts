import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BierutProject } from '../../data/bierut-projects'; // Adjust path if necessary
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-study-modal',
  imports: [CommonModule],
  templateUrl: './case-study-modal.component.html',
  styleUrls: ['./case-study-modal.component.css']
})
export class CaseStudyModalComponent {
  @Input() project: BierutProject | null = null; // Can be null if modal is not active
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}