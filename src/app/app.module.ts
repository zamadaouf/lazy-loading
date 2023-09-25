import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GewdLazyLoaderModule } from '@gewd/lazy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GewdLazyLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
