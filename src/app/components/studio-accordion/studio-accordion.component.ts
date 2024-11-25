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

@Component({
  selector: 'app-studio-accordion',
  templateUrl: './studio-accordion.component.html',
  styleUrls: ['./studio-accordion.component.scss'],
})
export class StudioAccordionComponent implements OnInit {
  ngOnInit() {}
  constructor(private dialogService: DialogService) {}

  activeSection: string = 'section1'; // Set the initial active section to the first section

  @ViewChildren('section') sections!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // 60% of the section must be visible to consider it active
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

  scrollToSection(sectionId: string): void {
    const targetSection = this.sections.find(
      (section) => section.nativeElement.id === sectionId
    );

    if (targetSection) {
      targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  openDialog(item: any) {
    this.dialogService.openDialog(StudioDialogComponent, {
      message: 'Hello from OtherComponent',
      itemId: item,
    });
  }
}
