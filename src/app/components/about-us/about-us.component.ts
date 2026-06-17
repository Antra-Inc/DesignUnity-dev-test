import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLogosService } from 'src/app/service/client-logos.service';
import { MetaTagsService } from 'src/app/service/meta-tags.service';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  clients!: any;
  constructor(
    private imageService: ClientLogosService,
    private http: HttpClient,
    private titleService: TitleService,
    private metaTagsService: MetaTagsService
  ) {}
  public getJSON(): Observable<any> {
    return this.http.get('./assets/clients-logos.json');
  }
  imagePaths: any[] = [];
  ngOnInit(): void {
    this.getJSON().subscribe((data: any) => {
      this.clients = data.Clients;

      console.log('images', this.clients);
    });
    this.titleService.setPageTitle('Design Unity About Us');

    // Set meta tags
    this.metaTagsService.setDescription(
      'Your trusted supply&apply partners—We deliver lasting solutions that bring your vision to life, offering eco-friendly, luxurious finishes with lasting quality.'
    );
    this.metaTagsService.setKeywords('');
  }
}
