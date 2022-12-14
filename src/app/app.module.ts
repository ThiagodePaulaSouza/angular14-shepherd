import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShepherdComponent } from './shepherd/shepherd.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,ShepherdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
