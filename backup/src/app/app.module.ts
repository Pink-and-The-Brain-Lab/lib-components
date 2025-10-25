import { CommonModule } from '@angular/common';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarComponent } from 'projects/components/src';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AvatarComponent,
  ],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor (
    private injector: Injector
  ) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    const injector = { injector: this.injector }
    const avatarComponent = createCustomElement(AvatarComponent, injector);
    customElements.define('cdk-avatar', avatarComponent);
  }
}
