import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BierutProject } from '../../data/bierut-projects';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-user-tribute-section',
  templateUrl: './user-tribute-section.component.html',
  styleUrls: ['./user-tribute-section.component.css']
})
export class UserTributeSectionComponent {
  @Input() project!: BierutProject;
  @Output() openCaseStudy = new EventEmitter<string>();
  constructor(private modalService: ModalService, private router: Router) {}
    
      onLogoClick() {
        this.modalService.openModal(this.project);
      }

  // Method to navigate to the 'the-making-of' page
  navigateToEasterEgg() {
    this.router.navigateByUrl('/the-making-of');
  }
}




