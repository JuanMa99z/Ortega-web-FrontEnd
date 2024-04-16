import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { BodyImagesComponent } from './components/body-images/body-images.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MainBodyComponent,
    BodyImagesComponent,
    ImageGalleryComponent,
    FooterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
