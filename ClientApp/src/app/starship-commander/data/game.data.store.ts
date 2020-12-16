import { Commander } from "../models/commander.model";
import { Starship } from "../models/starship.model";

export class GameDataStore {
    public defaultCommander: Commander = {
        Name: 'Michael Blum',
        Age: 34,
        Height: '6-2',
        Weight: '160',
        Gender: 'male',
        Ship: this.grabDefaultStarship(),
        Rank: 'O-1',
        Resources: { Credits: 100, Relics: [{Name: 'Old Map', Classification: 'Personal Belonging', Ability: {Navigation: '+3'}}]},
        Reputation: 0,
        Type: 'Pragmatic',
        Physical: 50,
        Mental: { Memory: 50, Knowledge: 25, Insight: 25, Perception: 50, Planning: 50 },
        Personality: { Charisma: 80, Leadership: 40, Luck: 10 }
    };

    public defaultStarship: Starship = {
        Hull: {},
        Shields: 0,
        Weapons: {},
        Cabin: {},
        Engine: {}
    };

    grabDefaultCommander(): Commander {
        return {... this.defaultCommander };
    }

    grabDefaultStarship(): Starship {
        return {... this.defaultStarship };
    }
}
 