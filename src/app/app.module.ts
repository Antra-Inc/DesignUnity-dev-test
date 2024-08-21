import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlooringComponent } from './components/flooring/flooring.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { FactsComponent } from './components/facts/facts.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { DuTabsComponent } from './shared/du-tabs/du-tabs.component';
import { TabComponent } from './shared/tab.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NextDirective } from './components/next.directive';
import { PrevDirective } from './components/prev.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestimonialSliderComponent } from './components/testimonial-slider/testimonial-slider.component';
import { DuDialogComponent } from './shared/du-dialog/du-dialog.component';
import { PortfolioDialogComponent } from './components/portfolio/portfolio-dialog/portfolio-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this module
import { WallsCeilingsComponent } from './components/walls-ceilings/walls-ceilings.component';
import { DuCarouselComponent } from './shared/du-carousel/du-carousel.component';
import { HomeSliderComponent } from './shared/home-slider/home-slider.component';
import { FlooringPageComponent } from './components/flooring/flooring-page/flooring-page.component';
import { VenetianPlastersComponent } from './components/venetian-plasters/venetian-plasters.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SurfaceStudioComponent } from './components/surface-studio/surface-studio.component';
import { SurfaceSlideComponent } from './components/surface-studio/surface-slide/surface-slide.component';

@NgModule({
  declarations: [
    AppComponent,
    FlooringComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    FactsComponent,
    FlooringComponent,
    FeaturesComponent,
    HomeComponent,
    PortfolioComponent,
    DuTabsComponent,
    TabComponent,
    TestimonialsComponent,
    NextDirective,
    PrevDirective,
    TestimonialSliderComponent,
    DuDialogComponent,
    PortfolioDialogComponent,
    WallsCeilingsComponent,
    DuCarouselComponent,
    HomeSliderComponent,
    FlooringPageComponent,
    VenetianPlastersComponent,
    AboutUsComponent,
    SurfaceStudioComponent,
    SurfaceSlideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
    // DuDialogComponent,
  ],
  exports: [ DuCarouselComponent,
    HomeSliderComponent,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
