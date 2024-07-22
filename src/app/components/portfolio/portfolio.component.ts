import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  layout = 2;
  Tab = '';
  changeLayout(data: any): void {
    console.log('data', data);

    this.layout = data;
  }
}
