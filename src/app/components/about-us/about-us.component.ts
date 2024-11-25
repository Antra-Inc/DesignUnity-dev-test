import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLogosService } from 'src/app/service/client-logos.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  clients!: any;
  constructor(
    private imageService: ClientLogosService,
    private http: HttpClient
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
  }
}
