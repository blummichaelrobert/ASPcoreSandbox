import { Component, Input } from "@angular/core";
import { Mission, MissionType } from "../../models/mission.model";
import { MissionsService } from "../../services/missions.service";

@Component({
    selector: 'mission-options',
    templateUrl: './mission-options.component.html',
    styleUrls: ['./mission-options.component.css']
})

export class MissionOptionsComponent {

    @Input() missionType: string;
    
    missions: Mission[];
    selectedMission: Mission;

    constructor(public missionsService: MissionsService) {}

    ngOnInit() {
        switch (this.missionType) {
            case MissionType.DIPLOMATIC:
                this.missions = this.missionsService.DIPLOMATICMISSIONS;
                break;
            case MissionType.MILITARY:
                this.missions = this.missionsService.MILITARYMISSIONS;
                break;
            case MissionType.SCIENTIFIC:
                this.missions = this.missionsService.SCIENTIFICMISSIONS;
                break;
            default:
                throw Error('Mission Options Component: missionType undefined');
                break;
        }
    }

    onSelect(mission: Mission): void {
        this.selectedMission = mission;
      }
}