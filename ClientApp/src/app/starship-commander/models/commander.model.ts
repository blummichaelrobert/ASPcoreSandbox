import { Resources } from "./in-game-player.model";
import { Starship } from "./starship.model";

export class Commander {
    Name: string;
    Age: number;
    Height: string;
    Weight: string;
    Gender: string;
    Ship: Starship;
    Rank: string;
    Resources: Resources;
    Reputation: number;
    Type: string;
    Physical: number;
    Mental: CommanderMentalStats;
    Personality: CommanderPersonality;
}

export class CommanderPersonality{
    Charisma: number;
    Leadership: number;
    Luck: number;
}

export class CommanderMentalStats {
    Memory: number;
    Knowledge: number;
    Perception: number;
    Insight: number;
    Planning: number;
}


