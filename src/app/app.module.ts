import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxThreeModule } from 'ngx-three';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxThreeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
