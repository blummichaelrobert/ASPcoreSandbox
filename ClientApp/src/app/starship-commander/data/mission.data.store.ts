import { Mission, MissionType } from "../models/mission.model";

export class MissionDataStore {

    DIPLOMATICMISSIONS: Mission[] = [
        { id: 1, type: MissionType.DIPLOMATIC, name: 'Escort the Senator', description: '', reward: 100 },
        { id: 2, type: MissionType.DIPLOMATIC, name: 'Protect the Capital', description: '', reward: 200 },
        { id: 3, type: MissionType.DIPLOMATIC, name: 'Escort Religious Fugitives', description: '', reward: 300 },
        { id: 4, type: MissionType.DIPLOMATIC, name: 'Establish New Trade Route', description: '', reward: 400 },
        { id: 5, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 5', description: '', reward: 500 },
        { id: 6, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 6', description: '', reward: 600 },
        { id: 7, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 7', description: '', reward: 700 },
        { id: 8, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 8', description: '', reward: 800 },
        { id: 9, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 9', description: '', reward: 900 },
        { id: 10, type: MissionType.DIPLOMATIC, name: 'Diplomatic Mission 10', description: '', reward: 1000 },
    ];

    MILITARYMISSIONS: Mission[] = [
        { id: 1, type: MissionType.MILITARY, name: 'Provide Military Support: Zerg', description: '', reward: 100 },
        { id: 2, type: MissionType.MILITARY, name: 'Military Offensive: Zerg', description: '', reward: 200 },
        { id: 3, type: MissionType.MILITARY, name: 'Military Offensive: Protoss', description: '', reward: 300 },
        { id: 4, type: MissionType.MILITARY, name: 'Military Mission 4', description: '', reward: 400 },
        { id: 5, type: MissionType.MILITARY, name: 'Military Mission 5', description: '', reward: 500 },
        { id: 6, type: MissionType.MILITARY, name: 'Military Mission 6', description: '', reward: 600 },
        { id: 7, type: MissionType.MILITARY, name: 'Military Mission 7', description: '', reward: 700 },
        { id: 8, type: MissionType.MILITARY, name: 'Military Mission 8', description: '', reward: 800 },
        { id: 9, type: MissionType.MILITARY, name: 'Military Mission 9', description: '', reward: 900 },
        { id: 10, type: MissionType.MILITARY, name: 'Military Mission 10', description: '', reward: 1000 },
    ];

    SCIENTIFICMISSIONS: Mission[] = [
        { id: 1, type: MissionType.SCIENTIFIC, name: 'Ground Research: X Element', description: '', reward: 100 },
        { id: 2, type: MissionType.SCIENTIFIC, name: 'Ground Research: Y Element', description: '', reward: 200 },
        { id: 3, type: MissionType.SCIENTIFIC, name: 'Deploy Satellite', description: '', reward: 300 },
        { id: 4, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 4', description: '', reward: 400 },
        { id: 5, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 5', description: '', reward: 500 },
        { id: 6, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 6', description: '', reward: 600 },
        { id: 7, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 7', description: '', reward: 700 },
        { id: 8, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 8', description: '', reward: 800 },
        { id: 9, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 9', description: '', reward: 900 },
        { id: 10, type: MissionType.SCIENTIFIC, name: 'Scientific Mission 10', description: '', reward: 1000 },
    ];
}