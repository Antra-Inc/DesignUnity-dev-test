import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FlooringPageComponent } from './components/flooring/flooring-page/flooring-page.component';
import { StudioAccordionComponent } from './components/studio-accordion/studio-accordion.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'flooring',
    component: FlooringPageComponent,
  },
  {
    path: 'studio',
    component: StudioAccordionComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
