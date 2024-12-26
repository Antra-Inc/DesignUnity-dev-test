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
import { SolutionsComponent } from './solutions/solutions.component';
import { CatalogComponent } from './catalog/catalog.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Design Unity | Home | Venetian Plaster Luxury Wall Finishes',
      description:
        'Thinking of painting walls? Elevate your surfaces with Venetian Lime plasters from Design Unity. Luxury wall & floor finishes | Imported brands | Explore now',
      keywords: 'home, angular, app',
    },
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Design Unity | Home | Venetian Plaster Luxury Wall Finishes',
      description:
        'Thinking of painting walls? Elevate your surfaces with Venetian Lime plasters from Design Unity. Luxury wall & floor finishes | Imported brands | Explore now',
      keywords: 'home, angular, app',
    },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },

  // {
  //   path: 'solutions/venetian-plaster-finishes',
  //   component: VenetianPlastersComponent,
  // },
  {
    path: 'solutions',
    component: SolutionsComponent,
    children: [
      {
        path: 'venetian-plaster-finishes',
        component: VenetianPlastersComponent,
      },
      {
        path: 'seamless-flooring',
        component: FlooringPageComponent,
      },
    ],
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
    path: 'blogs/:header',
    component: BlogDetailsComponent,
  },
  {
    path: 'contact-us',
    component: ContactusComponent,
  },
  {
    path: 'thank_you',
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
  {
    path: 'venetian-plaster-catalog',
    component: CatalogComponent,
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
