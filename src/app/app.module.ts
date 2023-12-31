import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarModule, CodeValidationModule, LoadingButtonModule, SpinnerModule } from 'components';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AvatarModule,
    CodeValidationModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    LoadingButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
