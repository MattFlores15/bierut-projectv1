// app.routes.ts
import { Routes } from '@angular/router';
import { PrototypingJourneyComponent } from './components/prototyping-journey/prototyping-journey.component';
import { TimelineHostComponent } from './components/timeline-host/timeline-host.component'; // Import the new component

export const routes: Routes = [
    { path: '', component: TimelineHostComponent, pathMatch: 'full' }, // Default route to show the timeline
    { path: 'timeline', component: TimelineHostComponent },
    { path: 'the-making-of', component: PrototypingJourneyComponent },
    // The button in user-tribute should use routerLink="/the-making-of" or this redirect:
    { path: 'go-to-prototyping', redirectTo: 'the-making-of', pathMatch: 'full' },
];