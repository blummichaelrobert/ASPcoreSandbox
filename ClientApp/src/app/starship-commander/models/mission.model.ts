
export class Mission {
    id: number;
    type: MissionType;
    name: string;
    reward: number;
    description: string;
}

export enum MissionType {
    DIPLOMATIC = 'diplomatic',
    SCIENTIFIC = 'scientific',
    MILITARY = 'military'
}