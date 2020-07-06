import { Component } from '@angular/core';
import { BaseballHTTPService } from '../shared/services/baseballHTTP.service';

@Component({
    selector: 'baseball',
    templateUrl: './baseball.component.html',
    styleUrls: ['./baseball.component.css'],
    providers: [BaseballHTTPService]
})

export class BaseballComponent {

    myData = [
        ['Mike Trout', 'CF', '6-2, 235 lbs', 0.291, 45, 104, 1.083, 137, 27, 2]
    ];

    chartColumns = ['Player Info', 'Positon', 'Ht/Wt', 'BA', 'HR', 'RBI', 'OPS', 'H', '2B', '3B'];

    teamCodeMap: Map<string, string> = new Map([
        ['bal', '110'],
        ['box', '111'],
        ['nya', '147'],
        ['tba', '139'],
        ['tor', '141'],
        ['cha', '145'],
        ['cle', '114'],
        ['det', '116'],
        ['kca', '118'],
        ['min', '142'],
        ['hou', '117'],
        ['ana', '108'],
        ['oak', '133'],
        ['sea', '136'],
        ['tex', '140'],
        ['atl', '144'],
        ['mia', '146'],
        ['nym', '121'],
        ['phi', '143'],
        ['chn', '112'],
        ['cin', '113'],
        ['mil', '158'],
        ['pit', '134'],
        ['sln', '138'],
        ['ari', '109'],
        ['col', '115'],
        ['lan', '119'],
        ['sdn', '135'],
        ['sfn', '137']
    ]);

    constructor(private baseballHTTPService: BaseballHTTPService) { }

    ngOnInit() {}

    handleDropdownClick(teamCode: string) {

        this.baseballHTTPService.get40ManRoster(teamCode).subscribe((data: any[]) => {

            const returnedData = data['roster_40']['queryResults']['row'];
            const newData = [];
            let atBats: string;
            let battingAverage: string;
            let homeRuns: string;
            let runsBattedIn: string;
            let onBasePercentage: string;
            let hits: string;
            let doubles: string;
            let triples: string;

            returnedData.forEach(player => {

                const playerid = player['player_id'];

                this.baseballHTTPService.getMorePlayerData(playerid).subscribe(result => {

                    if (result['sport_hitting_tm']['queryResults']['totalSize'] === '0') {
                        return;
                    } else {
                        // console.log(result);
                        let hittingStats: any[] = result['sport_hitting_tm']['queryResults']['row'];


                        if (hittingStats.length > 1) {
                            hittingStats = hittingStats[1];
                        }

                        if (hittingStats['ab'] === undefined) {
                            atBats = '0';
                        } else {
                            atBats = hittingStats['ab'];
                        }

                        battingAverage = hittingStats['avg'];
                        homeRuns = hittingStats['hr'];
                        runsBattedIn = hittingStats['rbi'];
                        onBasePercentage = hittingStats['obp'];
                        hits = hittingStats['h'];
                        doubles = hittingStats['d'];
                        triples = hittingStats['t'];

                        const newPlayer: BaseballPlayer = {
                            playerId: player['player_id'],
                            teamId: player['team_id'],
                            firstName: player['name_first'],
                            lastName: player['name_last'],
                            position: player['position_txt'],
                            heightWeight: `${player['height_feet']}ft ${player['height_inches']}in - ${player['weight']} lbs.`,
                            atBats: atBats,
                            battingAverage: battingAverage,
                            homeRuns: homeRuns,
                            runsBattedIn: runsBattedIn,
                            onBasePercentage: onBasePercentage,
                            hits: hits,
                            doubles: doubles,
                            triples: triples
                        };

                        // console.log(newPlayer);
                        this.baseballHTTPService.loadPlayerData(newPlayer).subscribe(() => {
                            console.log(`player data loaded`);
                        });
                    }
                });


                const playa = [player['name_display_first_last'], player['position'], player['weight'], 0.300, 45, 100, 1.000, 130, 30, 3];
                newData.push(playa);
            });

            this.myData = newData;
        });
    }

    onSelect(event: any) {
        console.log(event);
    }
}

export class BaseballPlayer {
    playerId: string;
    teamId: string;
    firstName?: string;
    lastName?: string;
    position?: string;
    heightWeight?: string;
    atBats?: string;
    battingAverage?: string;
    homeRuns?: string;
    runsBattedIn?: string;
    onBasePercentage?: string;
    hits?: string;
    doubles?: string;
    triples?: string;
}
