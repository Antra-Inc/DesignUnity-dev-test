import { Component, OnInit } from '@angular/core';
import { StudioService } from '../../studio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-studio-dialog',
  templateUrl: './studio-dialog.component.html',
  styleUrls: ['./studio-dialog.component.scss']
})
export class StudioDialogComponent implements OnInit {

  isModalOpen = false;
  private modalSubscription!: Subscription;

  constructor(private modalService: StudioService) {}

  ngOnInit() {
    this.modalSubscription = this.modalService.modalState$.subscribe((isOpen) => {
      this.isModalOpen = isOpen;
    });
  }

  closeModal() {
    this.modalService.closeModal();
  }

  ngOnDestroy() {
    this.modalSubscription.unsubscribe(); // Avoid memory leaks
  }

}
