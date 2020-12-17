import { Component, Input } from "@angular/core";
import { ExpansionPanelContent } from "../../data/general.models";
import { Commander } from "../../models/commander.model";
import { MissionsService } from "../../services/missions.service";

@Component({
    selector: 'expansion-panel',
    templateUrl: './expansion-panel.component.html',
    styleUrls: ['./expansion-panel.component.css'],
    providers: []
})

export class ExpansionPanelComponent{

    @Input() expansionPanelContent: ExpansionPanelContent;

    constructor(public missionService: MissionsService){}

    ngOnInit() {}
}