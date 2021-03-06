import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { MusicComponent } from './music/music.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicModule } from './music/music.module';
import { AppRoutingModule } from './app-routing.module';
import { BaseballModule } from './baseball/baseball.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  imports: [
    AppRoutingModule,
    BaseballModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MusicModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
