import { Component, ViewChild, ɵPlayState } from '@angular/core';
import { Router } from '@angular/router';
import { BaseballHTTPService } from '../shared/services/baseballHTTP.service';
import { BaseballPlayer, HittingStats, Pitcher, PitchingStats } from './models/baseball.models';
import { GoogleChartComponent } from 'angular-google-charts';
import { BaseballData } from './baseball.data';
import { BaseballDataService } from './baseball.service';

@Component({
    selector: 'baseball',
    templateUrl: './baseball.component.html',
    styleUrls: ['./baseball.component.css'],
    providers: [BaseballHTTPService]
})

export class BaseballComponent {

    @ViewChild('playersGrid', { static: false }) playerGrid: GoogleChartComponent;

    myData = [
        ['Mock Player', '6-2, 235 lbs', '4.0', '100', '30', '5', '1.2', '65', '0.65', '11', '2']
    ];

    playerChartColumns = ['Player Name', 'Ht/Wt', 'Team', 'AB', 'BA', 'HR', 'RBI', 'OBP', 'H', 'D', 'T'];
    pitcherChartColumns = ['Pitcher Name', 'Ht/Wt', 'era', 'so', 'bb', 'ha9', 'whip', 'ip', 'so/ip'];

    baseBallData: BaseballData = new BaseballData();

    hittingStats: HittingStats = new HittingStats();
    pitchingStats: PitchingStats = new PitchingStats();

    chosenPlayer: BaseballPlayer = new BaseballPlayer();
    selectedPlayers: BaseballPlayer[] = [];

    constructor(private baseballHTTPService: BaseballHTTPService,
                private baseballDataService: BaseballDataService,
                private router: Router) { }

    ngOnInit() { }

    getPositionData(position: string) {
        this.baseballHTTPService.getPlayersByPostion(position).subscribe((data: BaseballPlayer[]) => {
            const newData: any[] = [];

            data.forEach(player => {
                const firstLastName = `${player.firstName} ${player.lastName}`;
                const team = this.baseBallData.teamIdToNameMap.get(player.teamId);
                const fieldPlayer = [
                    firstLastName,
                    player.heightWeight,
                    team,
                    player.atBats,
                    player.battingAverage,
                    player.homeRuns,
                    player.runsBattedIn,
                    player.onBasePercentage,
                    player.hits,
                    player.doubles,
                    player.triples
                ];
                newData.push(fieldPlayer);
            });

            this.myData = newData;
        });
    }

    handleDropdownClick(teamCode: string) {
        this.baseballHTTPService.getRosterFromContext(teamCode).subscribe((data: Pitcher[]) => {
            const newData: any[] = [];
            data.forEach(player => {

                const firstLastName = `${player.firstName} ${player.lastName}`;
                const so: number = +player.strikeOuts;
                const ip: number = +player.inningsPitched;
                const soPerip = (so / ip).toPrecision(3);
                const pitcher = [
                    firstLastName,
                    player.heightWeight,
                    player.earnedRunAverage,
                    player.strikeOuts,
                    player.walks,
                    player.hitAllowedAvgPer9Innings,
                    player.whip,
                    player.inningsPitched,
                    soPerip.toString()
                ];
                newData.push(pitcher);
            });

            this.myData = newData;
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
        console.log(event['selection'][0]['row']);
        console.log(this.playerGrid);

        const playerKey = event['selection'][0]['row'];

        const playerRawData = this.playerGrid.data[playerKey];
        console.log(playerRawData);
        this.chosenPlayer = {
            firstName: playerRawData[0].toString(),
            heightWeight: playerRawData[1].toString(),
            teamId: this.baseballDataService.getTeamCodeFromTeamName(playerRawData[2].toString()),
            atBats: playerRawData[3].toString(),
            battingAverage: playerRawData[4].toString(),
            homeRuns: playerRawData[5].toString(),
            runsBattedIn: playerRawData[6].toString(),
            onBasePercentage: playerRawData[7].toString(),
            hits: playerRawData[8].toString(),
            doubles: playerRawData[9].toString(),
            triples: playerRawData[10].toString()
        };

        console.log(this.chosenPlayer);
    }

    selectPlayer() {
        
    }

    btnClick() {
        this.router.navigateByUrl('/gamecast');
    }
}
// 0: "Rafael Devers"
// 1: "6ft 0in - 240 lbs."
// 2: "Boston Red Sox"
// 3: "647"
// 4: ".311"
// 5: "32"
// 6: "115"
// 7: ".361"
// 8: "201"
// 9: "54"
// 10: "4"