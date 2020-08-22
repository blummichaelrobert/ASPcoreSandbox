import { Component, Input } from '@angular/core';
import { GoogleChartService } from '../../shared/services/google-chart.service';

import {  GooglePieChartOptions } from '../../shared/models/google-pie-chart.model';
import { MusicKey } from '../music.models';
import { MusicService } from 'src/app/shared/services/music-key.service';
import { MusicDataService } from 'src/app/shared/services/music-data.service';
import { throwError } from 'rxjs';


@Component({
    selector: 'chord-progression',
    templateUrl: './chord-progression.component.html',
    styleUrls: ['./chord-progression.component.css'],
    providers: [ GoogleChartService]
})

export class ChordProgressionComponent {
    // todo: clean this class starting with these properties.
    @Input() musicKey: MusicKey;
    @Input() showingMajorKey: boolean;

    chartOptions: GooglePieChartOptions;
    chosenChordProgressionIntervals: string[] = [];
    chosenChordProgressionColors: string[] = [];
    data: (string | number)[][];
    type = 'PieChart';

    chordProgressionHeader = 'I IV V';

    chordProgressionState: ChordProgressionState = new ChordProgressionState();

    constructor(private googleChartService: GoogleChartService,
                private musicService: MusicService,
                private musicDataService: MusicDataService) { }

    ngOnInit() {
    }

    ngOnChanges() {

        if (!this.showingMajorKey) {
            this.handleProgressionSelected(['Root', 'minor6th', 'minor7th']);
            this.chordProgressionState.setButtonLabelsToMinorKey();
            return;
        }

        this.handleProgressionSelected(['Root', 'Perfect4th', 'Perfect5th']);
        this.chordProgressionState.setButtonLabelsToMajorKey();
    }


    handleChordProgressionBtnClick(genericInterval: string) {
        this.chordProgressionState = this.chordProgressionState.resetChordProgressionState();

        let keyTypeSpecific_Interval = '';

        if (this.showingMajorKey.valueOf() === true) {
            this.chordProgressionState.setButtonLabelsToMajorKey();

            keyTypeSpecific_Interval =  this.musicDataService.getMajorIntervalWithGenericKey(genericInterval);
            this.chosenChordProgressionIntervals.push(keyTypeSpecific_Interval);

            const eligibleIntervals = this.musicService.getNextMajorChordProgressionIntervals(keyTypeSpecific_Interval);
            eligibleIntervals.forEach(interval => {
                interval = this.musicDataService.getGenericIntervalWithMajorIntervalValue(interval);
                this.chordProgressionState.setProgressionIntervalState(interval, true);
            });

        } else {
            this.chordProgressionState.setButtonLabelsToMinorKey();

            keyTypeSpecific_Interval =  this.musicDataService.getMinorIntervalWithGenericKey(genericInterval);
            this.chosenChordProgressionIntervals.push(keyTypeSpecific_Interval);

            const eligibleIntervals = this.musicService.getNextMinorChordProgressionIntervals(keyTypeSpecific_Interval);
            eligibleIntervals.forEach(interval => {
                interval = this.musicDataService.getGenericIntervalWithMinorIntervalValue(interval);
                this.chordProgressionState.setProgressionIntervalState(interval, true);
            });
        }

        const color = this.getBackgroundColors([keyTypeSpecific_Interval]); // same
        this.chosenChordProgressionColors.push(color[0]); // same

        this.setChartData(this.chosenChordProgressionIntervals); // same
        this.setChartOptions(this.chosenChordProgressionColors, this.determineStartAngle(this.chosenChordProgressionIntervals)); // same
        this.mapIntervalNameToRomanNumeralEquivalent(this.chosenChordProgressionIntervals); // same
    }

    determineStartAngle(intervals: string[]): number {
        return -180 / intervals.length;
    }

    getBackgroundColors(intervals: string[]): string[] {
        const backgroundColors: string[] = [];
        intervals.forEach(interval => {
            const note = this.musicKey[interval];
            backgroundColors.push(this.musicService.getColor(note));
        });
        return backgroundColors;
    }

    handleProgressionSelected(intervals: string[]) {
        this.resetChordProgressionButtons();

        this.mapIntervalNameToRomanNumeralEquivalent(intervals);

        this.setChartData(intervals);

        this.setChartOptions(this.getBackgroundColors(intervals), this.determineStartAngle(intervals));
    }

    mapIntervalNameToRomanNumeralEquivalent(intervals: string[]) {
        this.chordProgressionHeader = '';

        if (!this.showingMajorKey) {
            intervals.forEach(interval => {
                this.chordProgressionHeader += ` ${this.musicDataService.getMinorRomanNumeral(interval)}`;
            });
            return;
        }

        intervals.forEach(interval => {
            this.chordProgressionHeader += ` ${this.musicDataService.getMajorRomanNumeral(interval)}`;
        });
    }

    resetChordProgressionButtons() {
        this.chordProgressionState = this.chordProgressionState.resetChordProgressionState();
        this.chosenChordProgressionIntervals = [];
        this.chosenChordProgressionColors = [];
    }

    setChartData(intervals: string[]) {
        const dataRequest: string[] = [];
        intervals.forEach(interval => {
            const note = this.musicKey[interval];
            dataRequest.push(note);
        });

        this.data = this.googleChartService.createDataSet(dataRequest);
    }

    setChartOptions(backgroundColors: string[], startAngle: number) {
        this.chartOptions = {
            pieHole: 0.4,
            colors: backgroundColors,
            legend: { position: 'none' },
            height: 300,
            pieSliceText: 'label',
            pieStartAngle: startAngle,
            tooltip: { trigger: 'none' },
            width: 300
        };
    }

    updateChosenChordProgressionIntervals(genericInterval: string) {
        this.chosenChordProgressionIntervals.push(this.musicDataService.getMajorIntervalWithGenericKey(genericInterval));
    }
}

// todo: use this class to keep track of labels on buttons => major vs minor.
export class ChordProgressionState {
    RootSelected: boolean;
    SecondIntervalSelected: boolean;
    ThirdIntervalSelected: boolean;
    FourthIntervalSelected: boolean;
    FifthIntervalSelected: boolean;
    SixthIntervalSelected: boolean;
    SeventhIntervalSelected: boolean;
    RootLabel: string;
    SecondIntervalLabel: string;
    ThirdIntervalLabel: string;
    FourthIntervalLabel: string;
    FifthIntervalLabel: string;
    SixthIntervalLabel: string;
    SeventhIntervalLabel: string;

    constructor() {
        this.RootSelected = true;
        this.RootLabel = '';

        this.SecondIntervalSelected = false;
        this.SecondIntervalLabel = '';

        this.ThirdIntervalSelected = false;
        this.ThirdIntervalLabel = '';

        this.FourthIntervalSelected = false;
        this.FourthIntervalLabel = '';

        this.FifthIntervalSelected = false;
        this.FifthIntervalLabel = '';

        this.SixthIntervalSelected = false;
        this.SixthIntervalLabel = '';

        this.SeventhIntervalSelected = false;
        this.SeventhIntervalLabel = '';
    }

    resetChordProgressionState(): ChordProgressionState {
        return new ChordProgressionState();
    }

    setProgressionIntervalState(interval: string, state: boolean) {
        switch (interval) {
            case 'Root':
                this.RootSelected = state;
                break;
            case 'SecondInterval':
                this.SecondIntervalSelected = state;
                break;
                case 'ThirdInterval':
                this.ThirdIntervalSelected = state;
                break;
                case 'FourthInterval':
                this.FourthIntervalSelected = state;
                break;
                case 'FifthInterval':
                this.FifthIntervalSelected = state;
                break;
                case 'SixthInterval':
                this.SixthIntervalSelected = state;
                break;
                case 'SeventhInterval':
                this.SeventhIntervalSelected = state;
                break;
            default:
                throwError(`ChordProgressionState Object Error: Can not find ${interval}`);
                break;
        }
    }

    toggleProgressionIntervalState(interval: string) {
        switch (interval) {
            case 'Root':
                this.RootSelected = !this.RootSelected;
                break;
            case 'SecondInterval':
                this.SecondIntervalSelected = !this.SecondIntervalSelected;
                break;
                case 'ThirdInterval':
                this.ThirdIntervalSelected = !this.ThirdIntervalSelected;
                break;
                case 'FourthInterval':
                this.FourthIntervalSelected = !this.FourthIntervalSelected;
                break;
                case 'FifthInterval':
                this.FifthIntervalSelected = !this.FifthIntervalSelected;
                break;
                case 'SixthInterval':
                this.SixthIntervalSelected = !this.SixthIntervalSelected;
                break;
                case 'SeventhInterval':
                this.SeventhIntervalSelected = !this.SeventhIntervalSelected;
                break;
            default:
                throwError(`ChordProgressionState Object Error: Can not find ${interval}`);
                break;
        }
    }

    setButtonLabelsToMajorKey(): ChordProgressionState {
        this.RootLabel = 'I';
        this.SecondIntervalLabel = 'ii';
        this.ThirdIntervalLabel = 'iii';
        this.FourthIntervalLabel = 'IV';
        this.FifthIntervalLabel = 'V';
        this.SixthIntervalLabel = 'iv';
        this.SeventhIntervalLabel = 'dim';

        return this;
    }

    setButtonLabelsToMinorKey(): ChordProgressionState {
        this.RootLabel = 'i';
        this.SecondIntervalLabel = 'dim';
        this.ThirdIntervalLabel = 'III';
        this.FourthIntervalLabel = 'iv';
        this.FifthIntervalLabel = 'v';
        this.SixthIntervalLabel = 'VI';
        this.SeventhIntervalLabel = 'VII';

        return this;
    }

    // talking to women app => app has simulated 'woman' who has different emotions based on how you interact with her
    // train ai with questions => questions that pry into female mind.
    // what emotional response do theses questions produce?
    // link emotion to language with ai.
    // qustions have emotion locus's that can be keyed on
    // base class emotions happy, sad, anger, disgust, fear => other emotions are composites of these
    // extend these emotions
    // guys are more apt to interact with a simulation to build cofidence than fail
    // get female endorsement.
}
