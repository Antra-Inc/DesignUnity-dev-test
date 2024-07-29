import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialogState = new BehaviorSubject<{ isVisible: boolean; data: any }>({
    isVisible: false,
    data: null,
  });

  dialogState$ = this.dialogState.asObservable();

  openDialog(data: any): void {
    this.dialogState.next({ isVisible: true, data });
  }

  closeDialog(): void {
    this.dialogState.next({ isVisible: false, data: null });
  }
}
