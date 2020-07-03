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

    constructor(private baseballHTTPService: BaseballHTTPService) { }


    ngOnInit() {
        this.baseballHTTPService.getPlayer()
        .subscribe((data: any) => { console.log(data); });
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
