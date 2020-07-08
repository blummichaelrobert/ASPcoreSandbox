import { Component, ViewChild } from '@angular/core';
import { BaseballHTTPService } from '../shared/services/baseballHTTP.service';
import { BaseballPlayer, HittingStats, Pitcher, PitchingStats } from './models/baseball.models';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
    selector: 'baseball',
    templateUrl: './baseball.component.html',
    styleUrls: ['./baseball.component.css'],
    providers: [BaseballHTTPService]
})

export class BaseballComponent {

    @ViewChild('playersGrid', { static: false }) playerGrid: GoogleChartComponent;

    myData = [
        ['Mike Trout', 'CF', '6-2, 235 lbs', 0.291, 45, 104, 1.083, 137, 27, 2]
    ];

    chartColumns = ['Player Info', 'Positon', 'Ht/Wt', 'BA', 'HR', 'RBI', 'OPS', 'H', '2B', '3B'];

    

    hittingStats: HittingStats = new HittingStats();
    pitchingStats: PitchingStats = new PitchingStats();

    constructor(private baseballHTTPService: BaseballHTTPService) { }

    ngOnInit() { }

    handleDropdownClick(teamCode: string) {
        this.baseballHTTPService.getRosterFromContext(teamCode).subscribe((returnedData) => {
            console.log(returnedData);
        });
        // this.baseballHTTPService.get40ManRoster(teamCode).subscribe((data: any[]) => {

        //     const returnedData = data['roster_40']['queryResults']['row'];
        //     const newData = [];

        //     returnedData.forEach(player => {
        //         // console.log(player);
        //         const playerid = player['player_id'];

        //         // if (player['position_txt'] === 'P') {
        //         //     this.loadNewPitcher(playerid, player);
        //         // } else {
        //         //     this.loadNewFieldPlayer(playerid, player);
        //         // }

        //         const playa = [player['name_display_first_last'], player['position'], player['weight'], 0.300, 45, 100, 1.000, 130, 30, 3];
        //         newData.push(playa);
        //     });

        //     this.myData = newData;

        //     console.log(this.playerGrid);
        // });
    }

    loadNewFieldPlayer(playerid: string, player: BaseballPlayer) {
        this.baseballHTTPService.getMorePlayerData(playerid).subscribe(result => {

            if (result['sport_hitting_tm']['queryResults']['totalSize'] === '0') {
                return;
            } else {
                let hittingStats: any[] = result['sport_hitting_tm']['queryResults']['row'];


                if (hittingStats.length > 1) {
                    hittingStats = hittingStats[1];
                }

                if (hittingStats['ab'] === undefined) {
                    this.hittingStats.atBats = '0';
                } else {
                    this.hittingStats.atBats = hittingStats['ab'];
                }

                this.hittingStats.battingAverage = hittingStats['avg'];
                this.hittingStats.homeRuns = hittingStats['hr'];
                this.hittingStats.runsBattedIn = hittingStats['rbi'];
                this.hittingStats.onBasePercentage = hittingStats['obp'];
                this.hittingStats.hits = hittingStats['h'];
                this.hittingStats.doubles = hittingStats['d'];
                this.hittingStats.triples = hittingStats['t'];

                const newPlayer: BaseballPlayer = {
                    playerId: player['player_id'],
                    teamId: player['team_id'],
                    firstName: player['name_first'],
                    lastName: player['name_last'],
                    position: player['position_txt'],
                    heightWeight: `${player['height_feet']}ft ${player['height_inches']}in - ${player['weight']} lbs.`,
                    atBats: this.hittingStats.atBats,
                    battingAverage: this.hittingStats.battingAverage,
                    homeRuns: this.hittingStats.homeRuns,
                    runsBattedIn: this.hittingStats.runsBattedIn,
                    onBasePercentage: this.hittingStats.onBasePercentage,
                    hits: this.hittingStats.hits,
                    doubles: this.hittingStats.doubles,
                    triples: this.hittingStats.triples
                };
                // this.baseballHTTPService.loadPlayerData(newPlayer).subscribe(() => {
                //     console.log(`player data loaded`);
                // });
            }
        });
    }

    loadNewPitcher(playerid: string, player: Pitcher) {
        this.baseballHTTPService.getMorePitcherData(playerid).subscribe(result => {
            if (result['sport_pitching_tm']['queryResults']['totalSize'] === '0') {
                return;
            } else {
                let pitchingStats: any[] = result['sport_pitching_tm']['queryResults']['row'];


                if (pitchingStats.length > 1) {
                    pitchingStats = pitchingStats[1];
                }

                const newPlayer: Pitcher = {
                    playerId: player['player_id'],
                    teamId: player['team_id'],
                    firstName: player['name_first'],
                    lastName: player['name_last'],
                    heightWeight: `${player['height_feet']}ft ${player['height_inches']}in - ${player['weight']} lbs.`,
                    earnedRunAverage: pitchingStats['era'],
                    strikeOuts: pitchingStats['so'],
                    inningsPitched: pitchingStats['ip'],
                    hitAllowedAvgPer9Innings: pitchingStats['h9'],
                    walks: pitchingStats['bb'],
                    whip: pitchingStats['whip']
                };
                // this.baseballHTTPService.loadPitcherData(newPlayer).subscribe(() => {
                //     console.log(`player data loaded`);
                // });
            }
        });
    }

    onSelect(event: any) {
        console.log(event);
    }
}
