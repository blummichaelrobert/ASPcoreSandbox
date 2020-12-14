import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { BaseballComponent } from './baseball/baseball.component';
import { MissionSelectContainer } from './starship-commander/containers/mission-select/mission-select.container';
import { StarShipCommanderTitleContainer } from './starship-commander/containers/title/sc-title.container';


const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'baseball', component: BaseballComponent },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'music', component: MusicComponent},
    { path: 'starship-commander', component: StarShipCommanderTitleContainer},
    { path: 'mission-select', component: MissionSelectContainer}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
