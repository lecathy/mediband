import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    ProfileHeaderComponent,
    ProfileDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'header',component: AppHeaderComponent},
      {path: 'waiting',component: ProfileHeaderComponent}, //act as waiting page
      {path: 'profiledetails',component: ProfileDetailsComponent},
      {path: 'home',component: HomeComponent},
    ])
  ],
  exports: [
    AppHeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
