import { Component, Input } from "@angular/core";
import { Mission, MissionType } from "../../models/mission.model";
import { MissionsService } from "../../services/missions.service";

@Component({
    selector: 'mission-options',
    templateUrl: './mission-options.component.html',
    styleUrls: ['./mission-options.component.css']
})

export class MissionOptionsComponent {

    @Input() missionType: MissionType;
    
    missions: Mission[];

    constructor(public missionsService: MissionsService) {}

    ngOnInit() {
        this.missions = this.missionsService.grabMissions(this.missionType);
    }

    onSelect(mission: Mission): void {
        console.log(mission);
        this.missionsService.selectedMission = mission;
      }
}