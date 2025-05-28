import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-prototyping-journey',
  imports: [CommonModule],
  templateUrl: './prototyping-journey.component.html',
  styleUrl: './prototyping-journey.component.css'
})
export class PrototypingJourneyComponent {

  constructor(private location: Location) {} // Inject Location
  goBack(): void {
    this.location.back();
  }

}
