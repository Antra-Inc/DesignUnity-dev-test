import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-du-dialog',
  templateUrl: './du-dialog.component.html',
  styleUrls: ['./du-dialog.component.scss']
})
export class DuDialogComponent {
  @Input() title: string = '';
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.isVisible = false;
    this.close.emit();
  }
}
