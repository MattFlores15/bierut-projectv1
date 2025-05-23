import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BierutProject } from '../../data/bierut-projects';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-early-career-section',
  imports: [],
  templateUrl: './early-career-section.component.html',
  styleUrl: './early-career-section.component.css'
})
export class EarlyCareerSectionComponent {

  @Input() project!: BierutProject;
  @Output() openCaseStudy = new EventEmitter<string>();

  constructor(private modalService: ModalService) {}

  onLogoClick() {
    this.modalService.openModal(this.project);
  }
}
