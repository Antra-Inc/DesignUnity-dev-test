import { Component } from '@angular/core';
import { DialogService } from './service/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Du-web';
  dialogData: any;
  dialogComponent: any;
  constructor(private dialogService: DialogService) {
    this.dialogService.dialogData$.subscribe(data => {
      this.dialogData = data;
      this.dialogComponent = data ? data.component : null;
    });
  }

  // closeDialog() {
  //   this.dialogData = null;
  // }



}
