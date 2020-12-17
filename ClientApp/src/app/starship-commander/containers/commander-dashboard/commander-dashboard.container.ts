import { Component } from "@angular/core";
import { GameDataStore } from "../../data/game.data.store";
import { ExpansionPanelContent } from "../../data/general.models";
import { Commander } from "../../models/commander.model";

@Component({
    selector: 'commander-dashboard',
    styleUrls: ['./commander-dashboard.container.css'],
    templateUrl: './commander-dashboard.container.html',
    providers: []
})

export class CommanderDashboardContainer {
    
    gameDataStore: GameDataStore = new GameDataStore();
    
    commander: Commander;

    BioExpansionPanelContent: ExpansionPanelContent;
    
    constructor(){}

    ngOnInit(){
        this.commander = this.gameDataStore.grabDefaultCommander();

        this.setContentForExpansionPanels();
    }

    setContentForExpansionPanels(): void {
        this.BioExpansionPanelContent = {
                                            description: 'Commanders Name, Ht/Wt, Gender', 
                                            title: 'Bio', 
                                            content: `${this.commander.Name}, ${this.commander.Height}/${this.commander.Weight}, ${this.commander.Gender}`
                                        };
    }
}