import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MusicModule } from './music/music.module';
import { AppRoutingModule } from './app-routing.module';
import { BaseballModule } from './baseball/baseball.module';
import { StarshipCommanderModule } from './starship-commander/starship-commander.module';

@NgModule({
  declarations: [
    AppComponent,
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
    StarshipCommanderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
