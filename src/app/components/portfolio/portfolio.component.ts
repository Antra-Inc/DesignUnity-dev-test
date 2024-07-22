import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DynamicImages,
  ImagesInterface,
} from 'src/app/interface/images.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  layout = 2;
  Tab = '';
  images!: ImagesInterface;
  contentData: any;
  tabTitles = [
    'Luxury',
    'Institutional',
    'Commercial',
    'Real Estate',
    'Small Residential',
    'ALL',
  ];
  tabs: { tabTitle: string; tabContent: any[] }[] = [];

  constructor(private http: HttpClient) {}
  public getJSON(): Observable<any> {
    return this.http.get('./assets/images.json');
  }
  ngOnInit(): void {
    // this.getJSON().subscribe((data: any) => {
    //   this.images = data;
    //   console.log('images', this.images);
    // });
    console.log('images', this.images);

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
  // getDynamicTabsData(imagesType: string) {
  //   console.log('images', imagesType);

  //   switch (imagesType) {
  //     case 'Luxury':
  //       this.contentData = this.images.Luxury;
  //       console.log('images1111', this.contentData);
  //       break;
  //     case 'Institutional':
  //       this.contentData = this.images.Institutional;
  //       console.log('images1111', this.contentData);
  //       break;

  //     default:
  //       this.contentData = this.images.Luxury;
  //       break;
  //   }

  //   this.contentData = this.images;
  //   console.log('images', this.contentData);
  // }
  getDynamicTabsData(imagesType: string): any[] {
    console.log('imagesType', imagesType);

    switch (imagesType) {
      case 'Luxury':
        this.contentData = this.images.Luxury;
        console.log('Luxury contentData', this.contentData);
        break;
      case 'Institutional':
        this.contentData = this.images.Institutional;
        console.log('Institutional contentData', this.contentData);
        break;
      case 'Commercial':
        this.contentData = this.images.Commercial;
        console.log('Commercial contentData', this.contentData);
        break;
      case 'Real Estate':
        this.contentData = this.images.RealEstate; // Use bracket notation for keys with spaces
        console.log('Real Estate contentData', this.contentData);
        break;
      case 'Small Residential':
        this.contentData = this.images.SmallResidential;
        console.log('Small Residential contentData', this.contentData);
        break;
      case 'ALL':
        this.contentData = { ...this.images };
        console.log('ALL contentData', this.contentData);
        break;
      default:
        this.contentData = this.images.Luxury; // Default to 'Luxury' if imagesType doesn't match
        break;
    }

    console.log('Final contentData', this.contentData);
    return this.contentData; // Return the selected content data
  }
  changeTabs(labeldata: any) {
    console.log('images11', labeldata, this.images);
    this.getJSON().subscribe((data: any) => {
      this.images = data;
      this.getDynamicTabsData(labeldata);

      console.log('images', this.images);
    });
  }
}
