import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ProfileHeaderComponent,
    ProfileDetailsComponent,
    HomeComponent
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
