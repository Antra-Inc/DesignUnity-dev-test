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
import { BlogDetailsComponent } from './components/blog-list/blog-details/blog-details.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsComponent } from './components/terms/terms.component';
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
    path: 'seamless-flooring',
    component: FlooringPageComponent,
  },
  {
    path: 'venetian-plaster-finishes',
    component: VenetianPlastersComponent,
  },
  {
    path: 'about',
    component: AboutUsComponent,
  },
  {
    path: 'surface-studio',
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
    path: 'blogs',
    component: BlogListComponent,
  },
  {
    path: 'blog_test',
    component: BlogTestComponent,
  },
  {
    path: 'blog/:header',
    component: BlogDetailsComponent,
  },
  {
    path: 'contact-us',
    component: ContactusComponent,
  },
  {
    path: 'Thank_You',
    component: ThankYouComponent,
  },
  {
    path: 'privacy_policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms_conditions',
    component: TermsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
