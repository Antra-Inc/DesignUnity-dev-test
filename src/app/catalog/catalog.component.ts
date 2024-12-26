import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  pdfSrc: string = './assets/pdf/Design Unity New Catalogue (Low).pdf';

  downloadPDF(): void {
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'du-venetian-plaster-catalog.pdf';
    link.click();
  }
}
