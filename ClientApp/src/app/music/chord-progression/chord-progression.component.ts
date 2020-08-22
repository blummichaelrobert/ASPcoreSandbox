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
            return;
        }

        this.handleProgressionSelected(['Root', 'Perfect4th', 'Perfect5th']);
    }


    handleChordProgressionBtnClick(genericInterval: string) {
        this.chordProgressionState = this.chordProgressionState.resetChordProgressionState();

        const keyTypeSpecific_Interval = this.musicDataService.getMajorIntervalWithGenericKey(genericInterval);
        this.chosenChordProgressionIntervals.push(keyTypeSpecific_Interval);

        const color = this.getBackgroundColors([keyTypeSpecific_Interval]);
        this.chosenChordProgressionColors.push(color[0]);

        this.setChartData(this.chosenChordProgressionIntervals);
        this.setChartOptions(this.chosenChordProgressionColors, this.determineStartAngle(this.chosenChordProgressionIntervals));
        this.mapIntervalNameToRomanNumeralEquivalent(this.chosenChordProgressionIntervals);

        const eligibleIntervals = this.musicService.getNextMajorChordProgressionIntervals(keyTypeSpecific_Interval);
        eligibleIntervals.forEach(interval => {
            interval = this.musicDataService.getGenericIntervalWithMajorIntervalValue(interval);
            this.chordProgressionState.setProgressionIntervalState(interval, true);
        });
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

export class ChordProgressionState {
    RootSelected: boolean;
    SecondIntervalSelected: boolean;
    ThirdIntervalSelected: boolean;
    FourthIntervalSelected: boolean;
    FifthIntervalSelected: boolean;
    SixthIntervalSelected: boolean;
    SeventhIntervalSelected: boolean;

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
