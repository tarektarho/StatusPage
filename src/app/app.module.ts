import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdCardModule,
    MdToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
