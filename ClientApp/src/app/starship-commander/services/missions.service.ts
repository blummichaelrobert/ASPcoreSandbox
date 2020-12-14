import { Injectable } from "@angular/core";
import { Mission, MissionType } from "../models/mission.model";

@Injectable()
export class MissionsService {
    DIPLOMATICMISSIONS: Mission[] = [
        { id: 1, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 1', description: '', reward: 100 },
        { id: 2, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 2', description: '', reward: 200 },
        { id: 3, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 3', description: '', reward: 300 },
        { id: 4, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 4', description: '', reward: 400 },
        { id: 5, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 5', description: '', reward: 500 },
        { id: 6, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 6', description: '', reward: 600 },
        { id: 7, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 7', description: '', reward: 700 },
        { id: 8, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 8', description: '', reward: 800 },
        { id: 9, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 9', description: '', reward: 900 },
        { id: 10, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 10', description: '', reward: 1000 },
    ];

    MILITARYMISSIONS: Mission[] = [
        { id: 1, type: MissionType.MILITARY, name: 'Military Mission 1', description: '', reward: 100 },
        { id: 2, type: MissionType.MILITARY, name: 'Military Mission 2', description: '', reward: 200 },
        { id: 3, type: MissionType.MILITARY, name: 'Military Mission 3', description: '', reward: 300 },
        { id: 4, type: MissionType.MILITARY, name: 'Military Mission 4', description: '', reward: 400 },
        { id: 5, type: MissionType.MILITARY, name: 'Military Mission 5', description: '', reward: 500 },
        { id: 6, type: MissionType.MILITARY, name: 'Military Mission 6', description: '', reward: 600 },
        { id: 7, type: MissionType.MILITARY, name: 'Military Mission 7', description: '', reward: 700 },
        { id: 8, type: MissionType.MILITARY, name: 'Military Mission 8', description: '', reward: 800 },
        { id: 9, type: MissionType.MILITARY, name: 'Military Mission 9', description: '', reward: 900 },
        { id: 10, type: MissionType.MILITARY, name: 'Military Mission 10', description: '', reward: 1000 },
    ];

    SCIENTIFICMISSIONS: Mission[] = [
        { id: 1, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 1', description: '', reward: 100 },
        { id: 2, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 2', description: '', reward: 200 },
        { id: 3, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 3', description: '', reward: 300 },
        { id: 4, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 4', description: '', reward: 400 },
        { id: 5, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 5', description: '', reward: 500 },
        { id: 6, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 6', description: '', reward: 600 },
        { id: 7, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 7', description: '', reward: 700 },
        { id: 8, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 8', description: '', reward: 800 },
        { id: 9, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 9', description: '', reward: 900 },
        { id: 10, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 10', description: '', reward: 1000 },
    ];
}