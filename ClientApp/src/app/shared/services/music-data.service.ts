import { Injectable } from "@angular/core";
import { MusicData } from "../data/music.data";



@Injectable({
    providedIn: 'root',
})

export class MusicDataService {

    musicData: MusicData = new MusicData();

    getKeyMoods(): Map<string, string> {
        return this.musicData.keyMoods;
    }

    getKeyMoodText(key: string): string[] {
        const moodText = this.musicData.keyMoods.get(key);
        return moodText.split('.');
    }

    getMajorRomanNumeral(interval: string): string {
        return this.musicData.majorIntervalNameToNumeralMap.get(interval);
    }

    getMinorRomanNumeral(interval: string): string {
        return this.musicData.minorIntervalNameToNumeralMap.get(interval);
    }

    getMajorIntervalWithGenericKey(key: string): string {
        return this.musicData.genericIntervalToMajorIntervalMap.get(key);
    }

    getGenericIntervalWithMajorIntervalValue(specificInterval: string): string {
        const mapValues = [... this.musicData.genericIntervalToMajorIntervalMap.values()];

        const y =  mapValues.find(value => value === specificInterval);

        const mapEntries = [... this.musicData.genericIntervalToMajorIntervalMap.entries()];

        const genericInterval = mapEntries.find(entry => entry[1] === specificInterval);

        return genericInterval[0];
    }
}
