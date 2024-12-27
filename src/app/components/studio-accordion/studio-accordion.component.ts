import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';
import { StudioDialogComponent } from './studio-dialog/studio-dialog.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TitleService } from 'src/app/service/title.service';
import { MetaTagsService } from 'src/app/service/meta-tags.service';

@Component({
  selector: 'app-studio-accordion',
  templateUrl: './studio-accordion.component.html',
  styleUrls: ['./studio-accordion.component.scss'],
})
export class StudioAccordionComponent implements OnInit, AfterViewInit {
  bangalore!: any[];
  hyderabad!: any[];
  delhi!: any[];

  ngOnInit() {
    this.titleService.setPageTitle(
      'Design Unity Surface Studio- Hyderabad, Delhi, Bangalore'
    );

    // Set meta tags
    this.metaTagsService.setDescription(
      'Come explore a world of custom Venetian plaster finishes for walls & ceilings, microcement finishes for floors. Luxury surface solutions for decorative walls'
    );
    this.metaTagsService.setKeywords('');
    this.getImages();
  }
  public getJSON(): Observable<any> {
    return this.http.get('./assets/surface-studio.json');
  }
  constructor(
    private dialogService: DialogService,
    private http: HttpClient,
    private titleService: TitleService,
    private metaTagsService: MetaTagsService
  ) {}

  activeSection: string = 'section1'; // Set the initial active section to the first section

  @ViewChildren('section') sections!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 10% of the section must be visible to consider it active
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, observerOptions);

    this.sections.forEach((section: ElementRef) => {
      observer.observe(section.nativeElement);
    });
  }
  getImages() {
    this.getJSON().subscribe(
      (data: any) => {
        this.bangalore = data.Bangalore;
        this.hyderabad = data.Hyderabad;
        this.delhi = data.Delhi;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  scrollToSection(sectionId: string): void {
    const targetSection = this.sections.find(
      (section) => section.nativeElement.id === sectionId
    );

    if (targetSection) {
      targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
      console.log(
        'hello',
        targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' })
      );
    }
  }
  openDialog(item: any) {
    this.dialogService.openDialog(StudioDialogComponent, {
      message: 'Hello from OtherComponent',
      itemId: item,
    });
  }
}
