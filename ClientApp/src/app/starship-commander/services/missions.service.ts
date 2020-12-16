import { Injectable } from "@angular/core";
import { MissionDataStore } from "../data/mission.data.store";
import { Mission, MissionType } from "../models/mission.model";

@Injectable()
export class MissionsService {
    constructor() {}

    missionDataStore: MissionDataStore = new MissionDataStore();

    selectedMission: Mission;

    grabMissions(missionType: MissionType): Mission[] {
        switch (missionType) {
            case MissionType.DIPLOMATIC:
                return this.missionDataStore.DIPLOMATICMISSIONS;
            case MissionType.MILITARY:
                return this.missionDataStore.MILITARYMISSIONS;
            case MissionType.SCIENTIFIC:
                return this.missionDataStore.SCIENTIFICMISSIONS;
            default:
                throw Error('Missions Service: missionType undefined');
        }
    }
}