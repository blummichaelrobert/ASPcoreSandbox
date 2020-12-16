import { Component } from "@angular/core";
import { GameDataStore } from "../../data/game.data.store";
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
    
    constructor(){}

    ngOnInit(){
        this.commander = this.gameDataStore.grabDefaultCommander();
        console.log(this.commander);
    }
}