import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-portfolio-json',
  templateUrl: './portfolio-json.component.html',
  styleUrls: ['./portfolio-json.component.scss']
})
export class PortfolioJsonComponent implements OnInit {

  categories: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void{
    this.dataService.getProducts().subscribe( data => {
      this.categories = data.categories;
      console.log(this.categories);
    });
  }

}
