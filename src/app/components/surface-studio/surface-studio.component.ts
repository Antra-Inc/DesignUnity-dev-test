import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { StudioService } from '../studio.service';

@Component({
  selector: 'app-surface-studio',
  templateUrl: './surface-studio.component.html',
  styleUrls: ['./surface-studio.component.scss']
})
export class SurfaceStudioComponent implements OnInit {
item: any;
openDialog(arg0: any) {
throw new Error('Method not implemented.');
}

  ngOnInit() {
      }
  constructor(private modalService: StudioService){ }

  activeSection: string = 'section1';  

  @ViewChildren('section') sections!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
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
    const targetSection = this.sections.find(section => section.nativeElement.id === sectionId);

    if (targetSection) {
      targetSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }


  slides = [
    {
      url: '../../../../assets/img/studio/DSC00153.png',
      alt: 'Caption One'
    },
    {
      url: '../../../../assets/img/studio/DSC00262.png',
      alt: 'Caption Two'
    },
    {
      url: '../../../../assets/img/studio/DSC00356.png',
      alt: 'Caption Three'
    },
    {
      url: '../../../../assets/img/studio/DSC00447.png',
      alt: 'Caption Four'
    },
    {
      url: '../../../../assets/img/studio/DSC00602.png',
      alt: 'Caption Five'
    },
    {
      url: '../../../../assets/img/studio/DSC00605.png',
      alt: 'Caption Six'
    },
    {
      url: '../../../../assets/img/studio/DSC00618.png',
      alt: 'Caption Seven'
    },
    {
      url: '../../../../assets/img/studio/DSC00262.png',
      alt: 'Caption Two'
    },
    {
      url: '../../../../assets/img/studio/DSC00356.png',
      alt: 'Caption Three'
    },
    {
      url: '../../../../assets/img/studio/DSC00447.png',
      alt: 'Caption Four'
    }
  ];


  delhi = [
    
    {
      url: '../../../../assets/img/studio/DSC00262.png',
      alt: 'Caption Two'
    },
    {
      url: '../../../../assets/img/studio/DSC00356.png',
      alt: 'Caption Three'
    },
    {
      url: '../../../../assets/img/studio/DSC00447.png',
      alt: 'Caption Four'
    },
    {
      url: '../../../../assets/img/studio/DSC00602.png',
      alt: 'Caption Five'
    },
    {
      url: '../../../../assets/img/studio/DSC00605.png',
      alt: 'Caption Six'
    }
  ];

  bangalore = [
    {
      url: '../../../../assets/img/studio/DSC00447.png',
      alt: 'Caption Four'
    },
    {
      url: '../../../../assets/img/studio/DSC00602.png',
      alt: 'Caption Five'
    },
    {
      url: '../../../../assets/img/studio/DSC00605.png',
      alt: 'Caption Six'
    },
    {
      url: '../../../../assets/img/studio/DSC00618.png',
      alt: 'Caption Seven'
    },
    {
      url: '../../../../assets/img/studio/DSC00262.png',
      alt: 'Caption Two'
    },
    {
      url: '../../../../assets/img/studio/DSC00356.png',
      alt: 'Caption Three'
    },
    {
      url: '../../../../assets/img/studio/DSC00447.png',
      alt: 'Caption Four'
    }
  ];


}
