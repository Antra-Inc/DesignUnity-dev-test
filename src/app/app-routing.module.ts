import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FlooringPageComponent } from './components/flooring-page/flooring-page.component';
import { VenetianPlastersComponent } from './components/venetian-plasters/venetian-plasters.component';
import { AboutUsComponent } from './components/about-us-page/about-us.component';
import { StudioAccordionComponent } from './components/studio/studio-accordion.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-list/blog-details/blog-details.component'
import { ModalComponent } from './components/modal/modal.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component'
import { ThumbnailPreviewComponent } from './components/thumbnail-preview/thumbnail-preview.component';
import { PortfolioJsonComponent } from './components/portfolio-json/portfolio-json.component';

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
    path: 'venetian_plasters',
    component: VenetianPlastersComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  },
  {
    path: 'surface',
    component: StudioAccordionComponent,
  },
  {
    path: 'blog',
    component: BlogListComponent,
  },
  { 
    path: 'blog/:id', 
    component: BlogDetailsComponent 
  },
  { 
    path: 'modal', 
    component: ModalComponent 
  },
  { 
    path: 'catalogue', 
    component: CatalogueComponent 
  },
  {
    path: 'thumbnails',
    component: ThumbnailPreviewComponent
  },
  {
    path: 'portfolio_json',
    component: PortfolioJsonComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
