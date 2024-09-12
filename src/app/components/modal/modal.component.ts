import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {


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
  

  currentSlides = this.slides; // Set the default array

  // Method to switch between different arrays
  changeSlides(slideArray: any[]) {
    this.currentSlides = slideArray;
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


}
