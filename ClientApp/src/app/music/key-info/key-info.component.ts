import { Component, Input, SimpleChange } from "@angular/core";
import { MusicKey } from "../music.models";
import { MusicData } from '../../shared/data/music.data';
import { MusicDataService } from '../../shared/services/musicData.service';
import {MusicService} from '../../shared/services/music-key.service';

@Component({
    selector: 'key-info',
    templateUrl: './key-info.component.html',
    styleUrls: ['./key-info.component.css'],
    providers: []
})

export class KeyInfoComponent {
    @Input() musicKey: MusicKey;

    key: string;
    keyMoodText: string[] = [];


    constructor(private musicDataService: MusicDataService,
                private musicService: MusicService) {}

    ngOnChanges(change: SimpleChange) {

        const keyRoot = change['musicKey']['currentValue']['Root'];
        if (!this.musicService.showingMajorKey) {
            this.updateKeyMoodText(`${keyRoot}m`); 
            return;
        }

        this.updateKeyMoodText(keyRoot);
    }

    updateKeyMoodText(keyRoot: string) {
        this.keyMoodText = this.musicDataService.getKeyMoodText(keyRoot);
    }
}
