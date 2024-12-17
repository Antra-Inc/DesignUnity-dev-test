import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DialogService } from './service/dialog.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollToService } from './service/scroll-to.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'Du-web';
  dialogData: any;
  dialogComponent: any;
  constructor(
    private dialogService: DialogService,
    private router: Router,
    private scrollToTopService: ScrollToService
  ) {
    this.dialogService.dialogData$.subscribe((data) => {
      this.dialogData = data;
      this.dialogComponent = data ? data.component : null;
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTopService.scrollToTop();
      });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTopService.scrollToTop();
      });
  }
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTop();
      });
  }
  private scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
