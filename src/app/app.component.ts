import { Component } from '@angular/core';
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
import { CommonModule } from '@angular/common';

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

  constructor(public modalService: ModalService) {}
}
