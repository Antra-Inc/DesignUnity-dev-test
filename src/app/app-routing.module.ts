import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FlooringPageComponent } from './components/flooring/flooring-page/flooring-page.component';
import { VenetianPlastersComponent } from './components/venetian-plasters/venetian-plasters.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SurfaceStudioComponent } from './components/surface-studio/surface-studio.component';
import { StudioAccordionComponent } from './components/studio-accordion/studio-accordion.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogTestComponent } from './components/blog-test/blog-test.component';
import { BlogDetailsComponent } from './components/blog-list/blog-details/blog-details.component'
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
    path: 'studio',
    component: SurfaceStudioComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'blog',
    component: BlogListComponent,
  },
  {
    path: 'blog_test',
    component: BlogTestComponent,
  },
  { 
    path: 'blog/:id', 
    component: BlogDetailsComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
