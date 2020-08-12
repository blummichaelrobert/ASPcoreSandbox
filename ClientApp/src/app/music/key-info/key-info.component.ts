import { Component, Input, SimpleChange } from "@angular/core";
import { MusicKey } from "../music.models";
import { MusicData } from '../../shared/data/music.data';
import { MusicDataService } from "src/app/shared/services/musicData.service";


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


    constructor(private musicDataService: MusicDataService) {}

    ngOnChanges(change: SimpleChange) {
        const keyRoot = change['musicKey']['currentValue']['Root'];
        this.keyMoodText = this.musicDataService.getKeyMoodText(keyRoot);
    }
}