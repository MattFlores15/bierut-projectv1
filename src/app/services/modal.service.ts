// src/app/services/modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BierutProject } from '../data/bierut-projects'; // Adjust path

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _isModalOpen = new BehaviorSubject<boolean>(false);
  private _currentProject = new BehaviorSubject<BierutProject | null>(null);

  isModalOpen$: Observable<boolean> = this._isModalOpen.asObservable();
  currentProject$: Observable<BierutProject | null> = this._currentProject.asObservable();

  openModal(project: BierutProject): void {
    this._currentProject.next(project);
    this._isModalOpen.next(true);
  }

  closeModal(): void {
    this._isModalOpen.next(false);
    this._currentProject.next(null); // Clear project data when closed
  }
}