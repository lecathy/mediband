import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ProfileHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AppHeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
