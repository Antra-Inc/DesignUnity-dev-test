import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DynamicImages,
  ImagesInterface,
} from 'src/app/interface/images.interface';
import { DialogService } from 'src/app/service/dialog.service';
import { DuTabsComponent } from 'src/app/shared/du-tabs/du-tabs.component';
import { PortfolioDialogComponent } from './portfolio-dialog/portfolio-dialog.component';
interface Image {
  imagePathHigh: string;
  imagePathLow: string;
  Category?: string;
  description?: string;
}

interface LuxuryImages {
  BlueBerryFarms: Image[];
  UrbanLuxe: Image[];
  MarmarinoExtra: Image[];
  ChandrikaReddy: Image[];
  TexturedAesthetics: Image[];
  DasariKiran: Image[];
  EarthyAlchemy: Image[];
  TexturalPoetry: Image[];
  MoodSunset: Image[];
  PietraOro: Image[];
}
interface InstitutionalImages {
  THub: Image[];
}

interface CommercialImages {
  Amavi: Image[];
  AnushreeReddy: Image[];
  CentroGrande: Image[];
  Hunsply: Image[];
  LahariExteriors: Image[];
  LavramOffice: Image[];
  LoomKraft: Image[];
  RapportShoeCompany: Image[];
  StellaJaipurRugs: Image[];
  Tusca: Image[];
}
interface RealEstate {
  ApilaClubhouse: Image[];
  ASBLLakesideClubhouse: Image[];
  Poetree: Image[];
  RealEstate: Image[];
}
interface ResidentoalImages {
  IstintoSpatulaInteriors: Image[];
  Sogni: Image[];
  FabricPearlFinishes: Image[];
  ConcreteNatural: Image[];
  ConcreteGrooves: Image[];
  TravertineBanding: Image[];
  SmoothConcrete: Image[];
  IstintoZen: Image[];
  Silk: Image[];
  GroovesButtons: Image[];
}
interface ImagesData {
  all?: any[];
  Luxury: LuxuryImages;
  Institutional: InstitutionalImages;
  Commercial: CommercialImages;
  RealEstate: RealEstate;
  SmallResidential: ResidentoalImages;
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  layout = 3;
  Tab = '';
  images!: ImagesData;
  contentData: any;
  firstImages: any = {};
  tabTitles = [
    'ALL',
    'Luxury',
    'Institutional',
    'Commercial',
    'Real Estate',
    'Small Residential',
  ];
  tabs: { tabTitle: string; tabContent: any[] }[] = [];
  dialogTitle = 'Dialog Title';
  dialogData: any;
  // constructor(private http: HttpClient, private dialogService: DialogService) {
  //   dialogService.dialogState$.subscribe((state: any) => {
  //     this.dialogData = state.data;
  //   });
  // }
  constructor(private dialogService: DialogService, private http: HttpClient) {}
  public getJSON(): Observable<any> {
    return this.http.get('./assets/portfolio-images.json');
  }
  ngOnInit(): void {
    // this.getJSON().subscribe((data: any) => {
    //   this.images = data;
    //   console.log('images', this.images);
    // });
    this.changeTabs('All');
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
      case 'ALL':
        this.contentData = [
          ...this.images.Luxury.UrbanLuxe.slice(0, 1),
          ...this.images.Luxury.MarmarinoExtra.slice(0, 1),
          ...this.images.Luxury.BlueBerryFarms.slice(0, 1),
          ...this.images.Luxury.TexturedAesthetics.slice(0, 1),
          ...this.images.Luxury.ChandrikaReddy.slice(0, 1),
          ...this.images.Luxury.DasariKiran.slice(0, 1),
          ...this.images.Luxury.EarthyAlchemy.slice(0, 1),
          ...this.images.Luxury.TexturalPoetry.slice(0, 1),
          ...this.images.Luxury.MoodSunset.slice(0, 1),
          ...this.images.Luxury.PietraOro.slice(0, 1),
        ];
        console.log('Luxury contentData', this.contentData, this.images.Luxury);

        break;
      case 'Luxury':
        this.contentData = [
          ...this.images.Luxury.UrbanLuxe.slice(0, 1),
          ...this.images.Luxury.MarmarinoExtra.slice(0, 1),
          ...this.images.Luxury.BlueBerryFarms.slice(0, 1),
          ...this.images.Luxury.TexturedAesthetics.slice(0, 1),
          ...this.images.Luxury.ChandrikaReddy.slice(0, 1),
          ...this.images.Luxury.DasariKiran.slice(0, 1),
          ...this.images.Luxury.EarthyAlchemy.slice(0, 1),
          ...this.images.Luxury.TexturalPoetry.slice(0, 1),
          ...this.images.Luxury.MoodSunset.slice(0, 1),
          ...this.images.Luxury.PietraOro.slice(0, 1),
        ];
        console.log('Luxury contentData', this.contentData);
        break;
      case 'Institutional':
        this.contentData = [];
        this.contentData = [...this.images.Institutional.THub.slice(0, 6)];
        console.log('Luxury contentData', this.contentData);
        break;
      case 'Commercial':
        this.contentData = [];
        this.contentData = [
          ...this.images.Commercial.Amavi.slice(0, 1),
          ...this.images.Commercial.AnushreeReddy.slice(0, 1),
          ...this.images.Commercial.CentroGrande.slice(0, 1),
          ...this.images.Commercial.CentroGrande.slice(0, 1),
          ...this.images.Commercial.Hunsply.slice(0, 1),
          ...this.images.Commercial.LahariExteriors.slice(0, 1),
          ...this.images.Commercial.LavramOffice.slice(0, 1),
          ...this.images.Commercial.LoomKraft.slice(0, 1),
          ...this.images.Commercial.RapportShoeCompany.slice(0, 1),
          ...this.images.Commercial.StellaJaipurRugs.slice(0, 1),
          ...this.images.Commercial.Tusca.slice(0, 1),
        ];
        console.log('Luxury contentData', this.contentData);
        break;
      case 'Real Estate':
        this.contentData = [];
        this.contentData = [
          ...this.images.RealEstate.ApilaClubhouse.slice(0, 1),
          ...this.images.RealEstate.ASBLLakesideClubhouse.slice(0, 1),
          ...this.images.RealEstate.Poetree.slice(0, 1),
          ...this.images.RealEstate.RealEstate.slice(0, 1),
        ];
        console.log('Luxury contentData', this.contentData);
        break;
      case 'Small Residential':
        this.contentData = [
          ...this.images.SmallResidential.IstintoSpatulaInteriors.slice(0, 1),
          ...this.images.SmallResidential.Sogni.slice(0, 1),
          ...this.images.SmallResidential.FabricPearlFinishes.slice(0, 1),
          ...this.images.SmallResidential.ConcreteNatural.slice(0, 1),
          ...this.images.SmallResidential.ConcreteGrooves.slice(0, 1),
          ...this.images.SmallResidential.TravertineBanding.slice(0, 1),
          ...this.images.SmallResidential.SmoothConcrete.slice(0, 1),
          ...this.images.SmallResidential.IstintoZen.slice(0, 1),
          ...this.images.SmallResidential.Silk.slice(0, 1),
          ...this.images.SmallResidential.GroovesButtons.slice(0, 1),
        ];
        console.log('Luxury contentData', this.contentData);
        break;

      default:
        this.contentData = []; // Default to 'Luxury' if imagesType doesn't match
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

  // openDialog(): void {
  //   this.dialogService.openDialog({
  //     message: 'This is a custom reusable dialog box.',
  //   });
  // }

  // closeDialog(): void {
  //   this.dialogService.closeDialog();
  // }
  openDialog(item: any) {
    const inputData: any[] = [];
    switch (item.section) {
      case 'Luxury':
        switch (item.subSection) {
          case 'UrbanLuxe':
            inputData.push(this.images.Luxury.UrbanLuxe);
            break;

          case 'MarmarinoExtra':
            inputData.push(this.images.Luxury.MarmarinoExtra);
            break;
          case 'BlueBerryFarms':
            inputData.push(this.images.Luxury.BlueBerryFarms);
            break;
          case 'ChandrikaReddy':
            inputData.push(this.images.Luxury.ChandrikaReddy);
            break;
          case 'DasariKiran':
            inputData.push(this.images.Luxury.DasariKiran);
            break;
          case 'EarthyAlchemy':
            inputData.push(this.images.Luxury.EarthyAlchemy);
            break;
          case 'TexturalPoetry':
            inputData.push(this.images.Luxury.TexturalPoetry);
            break;
          case 'MoodSunset':
            inputData.push(this.images.Luxury.MoodSunset);
            break;
          case 'PietraOro':
            inputData.push(this.images.Luxury.PietraOro);
            break;

          default:
            break;
        }

        break;
      case 'Institutional':
        switch (item.subSection) {
          case 'THub':
            inputData.push(this.images.Institutional.THub);
            break;

          default:
            break;
        }
        break;
      case 'Commercial':
        switch (item.subSection) {
          case 'Amavi':
            console.log('amavi', item.subSection);

            inputData.push(this.images.Commercial.Amavi);
            break;
          case 'AnushreeReddy':
            console.log('AnushreeReddy', item.subSection);

            inputData.push(this.images.Commercial.AnushreeReddy);
            break;
          case 'CentroGrande':
            console.log('CentroGrande', item.subSection);

            inputData.push(this.images.Commercial.CentroGrande);
            break;
          case 'Hunsply':
            console.log('AnushreeReddy', item.subSection);

            inputData.push(this.images.Commercial.Hunsply);
            break;
          case 'LahariExteriors':
            console.log('AnushreeReddy', item.subSection);

            inputData.push(this.images.Commercial.LahariExteriors);
            break;
          case 'LavramOffice':
            console.log('AnushreeReddy', item.subSection);

            inputData.push(this.images.Commercial.LavramOffice);
            break;
          case 'LoomKraft':
            console.log('AnushreeReddy', item.subSection);

            inputData.push(this.images.Commercial.LoomKraft);
            break;
          case 'RapportShoeCompany':
            console.log('AnushreeReddy', item.subSection);

            inputData.push(this.images.Commercial.RapportShoeCompany);
            break;
          case 'StellaJaipurRugs':
            console.log('AnushreeReddy', item.subSection);

            inputData.push(this.images.Commercial.StellaJaipurRugs);
            break;
          case 'Tusca':
            console.log('AnushreeReddy', item.subSection);

            inputData.push(this.images.Commercial.Tusca);
            break;

          default:
            break;
        }

        break;
      case 'RealEstateBuilders':
        switch (item.subSection) {
          case 'ApilaClubhouse':
            inputData.push(this.images.RealEstate.ApilaClubhouse);
            break;
          case 'ASBLLakesideClubhouse':
            inputData.push(this.images.RealEstate.ASBLLakesideClubhouse);
            break;
          case 'Poetree':
            inputData.push(this.images.RealEstate.Poetree);
            break;
          case 'RealEstate':
            inputData.push(this.images.RealEstate.RealEstate);
            break;

          default:
            break;
        }
        break;
      case 'SmallResidential':
        switch (item.subSection) {
          case 'IstintoSpatulaInteriors':
            inputData.push(
              this.images.SmallResidential.IstintoSpatulaInteriors
            );
            break;
            case 'Sogni':
              inputData.push(this.images.SmallResidential.Sogni);
              break;
          case 'IstintoSpatulaInteriors':
            inputData.push(
              this.images.SmallResidential.IstintoSpatulaInteriors
            );
            break;
          case 'FabricPearlFinishes':
            inputData.push(this.images.SmallResidential.FabricPearlFinishes);
            break;
          case 'ConcreteNatural':
            inputData.push(this.images.SmallResidential.ConcreteNatural);
            break;
          case 'ConcreteGrooves':
            inputData.push(this.images.SmallResidential.ConcreteGrooves);
            break;
          case 'TravertineBanding':
            inputData.push(this.images.SmallResidential.TravertineBanding);
            break;
          case 'SmoothConcrete':
            inputData.push(this.images.SmallResidential.SmoothConcrete);
            break;
          case 'IstintoZen':
            inputData.push(this.images.SmallResidential.IstintoZen);
            break;
          case 'Silk':
            inputData.push(this.images.SmallResidential.Silk);
            break;
          case 'GroovesButtons':
            inputData.push(this.images.SmallResidential.GroovesButtons);
            break;

          default:
            break;
        }
        break;
      default:
        break;
    }

    this.dialogService.openDialog(
      PortfolioDialogComponent,
      { message: 'Hello from OtherComponent', itemId: inputData }
      // 'Dialog Title'
      // [
      //   {
      //     text: 'OK',
      //     action: () => {
      //       this.onOk();
      //     },
      //   },
      //   {
      //     text: 'Cancel',
      //     action: () => {
      //       this.onCancel();
      //     },
      //   },
      // ]
    );
  }
  // onOk() {
  //   console.log('OK clicked');
  //   this.dialogService.closeDialog();
  // }

  // onCancel() {
  //   console.log('Cancel clicked');
  //   this.dialogService.closeDialog();
  // }
}
