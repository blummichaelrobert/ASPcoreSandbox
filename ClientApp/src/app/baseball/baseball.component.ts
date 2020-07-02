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
        ['London', 8136000],
        ['New York', 8538000],
        ['Paris', 2244000],
        ['Berlin', 3470000],
        ['Kairo', 19500000]
    ];

    chartColumns = ['City', 'Inhabitants'];

    constructor(private baseballHTTPService: BaseballHTTPService) { }


    ngOnInit() {
        this.baseballHTTPService.getPlayer()
        .subscribe((data: any) => { console.log(data)});
    }
}
