import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BierutProject } from '../../data/bierut-projects';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-library-project',
  imports: [],
  templateUrl: './library-project.component.html',
  styleUrl: './library-project.component.css'
})
export class LibraryProjectComponent {

 
  @Input() project!: BierutProject;
  @Output() openCaseStudy = new EventEmitter<string>();

  constructor(private modalService: ModalService) {}
    
      onLogoClick() {
        this.modalService.openModal(this.project);
      }
}
