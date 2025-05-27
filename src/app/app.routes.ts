// app.routes.ts
import { Routes } from '@angular/router';
import { PrototypingJourneyComponent } from './components/prototyping-journey/prototyping-journey.component';
import { TimelineHostComponent } from './components/timeline-host/timeline-host.component'; // Import the new component

export const routes: Routes = [
    { path: '', component: TimelineHostComponent, pathMatch: 'full' }, // Default route to show the timeline
    { path: 'timeline', component: TimelineHostComponent }, // Optional: if you want an explicit /timeline path
    { path: 'the-making-of', component: PrototypingJourneyComponent },
    // The button in user-tribute should use routerLink="/the-making-of" or this redirect:
    { path: 'go-to-prototyping', redirectTo: 'the-making-of', pathMatch: 'full' },
    // Remove: { path: 'user-tribute', component: UserTributeSectionComponent },
    // as UserTributeSectionComponent is now part of TimelineHostComponent.
    // If you need to scroll to #user-tribute on the timeline, that's handled by ScrollService or fragment routing.
];