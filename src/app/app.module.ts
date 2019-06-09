import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
import { Baitap1ContentComponent } from './baitap1/baitap1-content/baitap1-content.component';
import { Baitap1SidebarComponent } from './baitap1/baitap1-sidebar/baitap1-sidebar.component';
import { Baitap1FooterComponent } from './baitap1/baitap1-footer/baitap1-footer.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { Baitap2MenuComponent } from './baitap2/baitap2-menu/baitap2-menu.component';
import { Baitap2CarouselComponent } from './baitap2/baitap2-carousel/baitap2-carousel.component';
import { Baitap2ContentComponent } from './baitap2/baitap2-content/baitap2-content.component';
import { Baitap2ContentWhatWeDoComponent } from './baitap2/baitap2-content/baitap2-content-what-we-do/baitap2-content-what-we-do.component';
import { Baitap2ContentContactComponent } from './baitap2/baitap2-content/baitap2-content-contact/baitap2-content-contact.component';
import { Baitap2CardsComponent } from './baitap2/baitap2-cards/baitap2-cards.component';
import { Baitap2FooterComponent } from './baitap2/baitap2-footer/baitap2-footer.component';
import { Baitap2ItemCardComponent } from './baitap2/baitap2-cards/baitap2-item-card/baitap2-item-card.component';
import { Baitap3Module } from './baitap3/baitap3.module';

@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    Baitap1ContentComponent,
    Baitap1SidebarComponent,
    Baitap1FooterComponent,
    Baitap2Component,
    Baitap2MenuComponent,
    Baitap2CarouselComponent,
    Baitap2ContentComponent,
    Baitap2ContentWhatWeDoComponent,
    Baitap2ContentContactComponent,
    Baitap2CardsComponent,
    Baitap2FooterComponent,
    Baitap2ItemCardComponent
  ],
  imports: [
    BrowserModule,
    Baitap3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
