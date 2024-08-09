import { Component } from '@angular/core';

@Component({
  selector: 'app-venetian-plasters',
  templateUrl: './venetian-plasters.component.html',
  styleUrls: ['./venetian-plasters.component.scss'],
})
export class VenetianPlastersComponent {
  layout = 3;
  changeLayout(data: any): void {
    this.layout = data;
    console.log('datasdsd', this.layout, data);
  }
  changeTabs(labeldata: any) {
    // console.log('images11', labeldata, this.images);
    // this.getJSON().subscribe((data: any) => {
    //   this.images = data;
    //   this.getDynamicTabsData(labeldata);

    //   console.log('images', this.images);
    // });
  }
}
