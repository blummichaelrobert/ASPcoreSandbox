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


    ngOnInit() {
        this.baseballHTTPService.getPlayer()
        .subscribe((data: any) => { console.log(data); });

        // this.baseballHTTPService.loadTeamData().subscribe(result => {
        //    console.log(result);
        // });

        // this.teamCodeMap.forEach((value, key) => {
        //     // console.log(`value: ${value}, key: ${key}, map: ${map}`);
        //     this.baseballHTTPService.loadTeamData(value, key).subscribe(result => {
        //         console.log(result);
        //      });
        // });
    }

    handleDropdownClick(teamCode: string) {
        this.baseballHTTPService.get40ManRoster(teamCode)
        .subscribe((data: any[]) => {

            console.log(data);

            const returnedData = data['roster_40']['queryResults']['row'];
            const stuff = [];

            returnedData.forEach(player => {
                const playerName = player['name_display_first_last'];
                const position = player['position_txt'];
                const weight = player['weight'];
                const playa = [playerName, position, weight,  0.300, 45, 100, 1.000, 130, 30, 3];
                stuff.push(playa);
            });
            this.myData = stuff;
        });
    }

    onSelect(event: any){
        console.log(event);
    }
}
