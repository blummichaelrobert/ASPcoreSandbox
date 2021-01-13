import { Component } from '@angular/core';
import { BaseballPlayer, Pitcher } from '../models/baseball.models';

@Component({
    selector: 'gamecast',
    templateUrl: './gamecast.component.html',
    styleUrls: ['./gamecast.component.css'],
    providers: []
})

export class GameCastComponent {
    homeTeam: string = 'Seattle Mariners';
    awayTeam: string = 'Los Angeles Angels';
    homeTeamScore: string;
    awayTeamScore: string;
    homeTeamHits: string;
    awayTeamHits: string;
    homeTeamWalks: string;
    awayTeamWalks: string;
    inning: string = '6th';
    balls: string;
    strikes: string;
    outs: string;
    firstBaseOccupied: boolean;
    secondBaseOccupied: boolean;
    thirdBaseOccupied: boolean;
    batter: BaseballPlayer;
    pitcher: Pitcher;
}