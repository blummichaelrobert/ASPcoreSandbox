import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'sc-title',
    templateUrl: './sc-title.container.html',
    styleUrls: ['./sc-title.container.css'],
    providers: []
})

export class StarShipCommanderTitleContainer{
    constructor(public router: Router) {}
}