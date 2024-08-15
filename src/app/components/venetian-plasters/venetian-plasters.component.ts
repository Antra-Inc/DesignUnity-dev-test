import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-venetian-plasters',
  templateUrl: './venetian-plasters.component.html',
  styleUrls: ['./venetian-plasters.component.scss'],
})
export class VenetianPlastersComponent implements OnInit {
  layout = 1;
  Tab = '';
  tabTitles = ['ALL', 'Viero', 'Bericalce', 'GG&F'];
  tabs: { tabTitle: string; tabContent: any[] }[] = [];
  images!: any;
  contentData: any;
  itemsToShow: any[] = []; // Array to hold the items to be displayed
  currentIndex = 0; // Track the current index of loaded items
  itemsIncrement = 4; // Number of items to add each time "Load More" is clicked
  constructor(private http: HttpClient) {}
  public getJSON(): Observable<any> {
    return this.http.get('./assets/solutions.json');
  }
  ngOnInit(): void {
    this.tabs = this.tabTitles.map((title) => {
      // console.log('this.contentData', this.contentData);
      return {
        tabTitle: title,
        // tabContent: this.getDynamicTabsData(title),
        tabContent: this.contentData,
      };
    });
  }
  changeLayout(data: any): void {
    this.layout = data;
    console.log('datasdsd', this.layout, data);
  }

  getDynamicTabsData(imagesType: string): any[] {
    console.log('imagesType', imagesType);
    switch (imagesType) {
      case 'ALL':
        this.contentData = this.images.All;
        // this.contentData = 'All';

        console.log('Luxury contentData', this.contentData);
        break;
      case 'Viero':
        this.contentData = this.images.Viero;
        console.log('Institutional contentData', this.contentData);
        break;
      case 'Bericalce':
        this.contentData = this.images.Bericalce;
        console.log('Institutional contentData', this.contentData);
        break;
      case 'GG&F':
        this.contentData = this.images.GGF;
        console.log('Institutional contentData', this.contentData);
        break;
      default:
        this.contentData = '';
        break;
    }
    // console.log('this.contentData', this.contentData);
    return this.contentData;
  }

  changeTabs(labeldata: any) {
    console.log('images11', labeldata, this.images);
    this.getJSON().subscribe((data: any) => {
      this.images = data;
      this.getDynamicTabsData(labeldata);
      this.loadItems();
      console.log('images', this.images);
    });
  }

  loadItems() {
    console.log(
      'this.itemsToShow',
      this.currentIndex,
      '   ',
      this.itemsIncrement
    );

    if (this.itemsToShow > this.contentData) {
      this.currentIndex = this.itemsToShow.length;
      this.itemsIncrement = this.itemsIncrement + 4;
    }
    this.itemsToShow = this.contentData.slice(
      this.currentIndex,
      this.itemsIncrement
    );
    // const nextBatch = this.contentData.slice(
    //   this.currentIndex,
    //   this.currentIndex + this.itemsIncrement
    // );
    // this.itemsToShow = this.itemsToShow.concat(nextBatch);
    // this.currentIndex += this.itemsIncrement;
    console.log('this.itemsToShow', this.itemsToShow);
  }

  loadMoreItems() {
    if (this.currentIndex < this.contentData.length) {
      this.loadItems();
    }
    console.log('this.contentData', this.itemsToShow);
  }
}
