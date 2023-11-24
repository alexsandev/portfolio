import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarComponent } from './pages/home/components/menu-bar/menu-bar.component';
import { PresentationSectionComponent } from './pages/home/components/presentation-section/presentation-section.component';
import { AboutSectionComponent } from './pages/home/components/about-section/about-section.component';
import { ProjectsSectionComponent } from './pages/home/components/projects-section/projects-section.component';
import { ContactSectionComponent } from './pages/home/components/contact-section/contact-section.component';
import { MobileMenuComponent } from './pages/home/components/mobile-menu/mobile-menu.component';
import { ProjectCardComponent } from './pages/home/components/projects-section/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    PresentationSectionComponent,
    AboutSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    MobileMenuComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
