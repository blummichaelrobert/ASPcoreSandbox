import { Component, SimpleChange, HostListener, ViewChild } from '@angular/core';

import { GooglePieChart, GooglePieChartOptions } from '../shared/models/google-pie-chart.model';
import { MusicKey } from './music.models';

import { GoogleChartService } from '../shared/services/google-chart.service';
import { CommonService } from '../shared/services/common.service';
import { MusicData } from '../shared/data/music.data';
import { MusicService } from '../shared/services/music-key.service';
import { KeyInfoComponent } from './key-info/key-info.component';


@Component({
    selector: 'music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css'],
    providers: [CommonService, GoogleChartService]
})

export class MusicComponent {

    @ViewChild('keyInfo', {static: false}) keyInfo: KeyInfoComponent;

    currentChartDimension = 0;
    musicData: MusicData = new MusicData();
    showingCircleOf5ths = false;

    keyPickerVisual: GooglePieChart = this.googleChartService.getNewPieChart();
    musicKeyVisual: GooglePieChart = this.googleChartService.getNewPieChart();

    constructor(
        private googleChartService: GoogleChartService,
        public  musicService: MusicService
    ) { }

    ngOnInit() {

        this.musicService.setMajorIntervalInitialState();

        this.intializeKeyPickerChart();

        this.intializeKeyVisualChart();
              
        this.handleKeySelected({ selection: [{ column: 0, row: 0 }] });

        const innerWidth = window.innerWidth;

        this.onResize({ target: { innerWidth: innerWidth } });
    }

    ngOnChanges(changes: SimpleChange) {
        console.log(changes);
    }

    getInterval(interval: number) {
        return this.musicData.intervalMap.get(interval);
    }

    handleIntervalSelectedFromChart(event: { selection: [{ column: number; row: number }] }) {
        const selection = event.selection[0].row;
        const interval = this.getInterval(selection);
        this.handleIntervalClick(interval, selection);
    }

    handleKeySelected(event: { selection: [{ column: number; row: number }] }) {

        let selection = event.selection[0].row;

        if (this.showingCircleOf5ths) {
            selection = this.googleChartService.getCircleOf5thsMappedNumber(selection);
        }

        this.musicService.setMusicKey(selection.toString());

        if (!this.musicService.showingMajorKey) {
            this.musicKeyVisual.data = this.googleChartService.getKeyDataSet('minor');
            this.updateKeyVisualizationColors(this.musicService.keyOmissionIndices);
            return;
        }

        this.musicKeyVisual.data = this.googleChartService.getKeyDataSet();
        this.updateKeyVisualizationColors(this.musicService.keyOmissionIndices);
    }

    handleKeyVersionSelected(keyType: string) {

        this.setMusicKeyVisualData(keyType);

        if (keyType === 'minor') {
            this.musicService.setMinorIntervalIntialState();
            this.musicService.setShowingMajorKey(false);
            this.musicService.setKeyOmmissions('minor');
            this.updateKeyVisualizationColors(this.musicService.keyOmissionIndices);
            this.keyInfo.updateKeyMoodText(`${this.musicService.rootNote}m`);
            return;
        }

        this.musicService.setMajorIntervalInitialState();
        this.musicService.setShowingMajorKey(true);
        this.musicService.setKeyOmmissions();
        this.updateKeyVisualizationColors(this.musicService.keyOmissionIndices);2
        this.keyInfo.updateKeyMoodText(`${this.musicService.rootNote}`);
    }

    handleIntervalClick(interval: string, index: number) {

        this.musicService.toggleServiceIntervalStateProperty(interval);

        if (this.musicService.intervalState[interval])
            this.musicService.removeIndexFromOmissions(index);
        else
            this.musicService.addIndexToOmissions(index);

        this.updateKeyVisualizationColors(this.musicService.keyOmissionIndices);
    }

    handleShowCircleByPerfect5ths() {
        // toggle property
        this.showingCircleOf5ths = !this.showingCircleOf5ths;

        if (!this.showingCircleOf5ths) {
            this.intializeKeyPickerChart();
            this.handleKeySelected({ selection: [{ column: 0, row: 0 }] });
            return;
        }

        // grab new data set
        this.keyPickerVisual.data = this.googleChartService.getKeyDataSet('circleOf5ths');

        // grab new colors
        const bgColors: string[] = [];
        this.keyPickerVisual.data.forEach(note => {
            const noteKey = note[0].toString();
            const color = this.musicService.getColor(noteKey);
            bgColors.push(color);
        });

        // update => set options
        this.keyPickerVisual.googleChartOptions = this.googleChartService.updateChartOptions(this.currentChartDimension, bgColors);

        this.handleKeySelected({ selection: [{ column: 0, row: 0 }] });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        const screenWidth = event.target.innerWidth;

        this.currentChartDimension = screenWidth / 4.75;

        const kpBGColors = this.googleChartService.defaultOptions.colors;
        let bgColors = this.musicService.getCurrentBackgroundColors();

        if (this.musicService.showingMajorKey)
            bgColors = this.whiteOutKeyPositions(this.musicData.majorKeyOmissionIndices, bgColors);
        else
            bgColors = this.whiteOutKeyPositions(this.musicData.minorKeyOmissionIndices, bgColors);

        this.keyPickerVisual.googleChartOptions = this.googleChartService.updateChartOptions(this.currentChartDimension, kpBGColors);
        this.musicKeyVisual.googleChartOptions = this.googleChartService.updateChartOptions(this.currentChartDimension, bgColors);
    }

    intializeKeyPickerChart() {
        this.keyPickerVisual.type = this.googleChartService.PIE_CHART;
        this.keyPickerVisual.data = this.musicData.KeyPickerDataSet;
        this.keyPickerVisual.googleChartOptions = this.googleChartService.defaultOptions;
    }

    intializeKeyVisualChart() {
        this.musicKeyVisual.type = this.googleChartService.PIE_CHART;
        this.musicKeyVisual.data = this.musicData.majorKeyDataSet;
        this.musicKeyVisual.googleChartOptions = this.googleChartService.defaultOptions;
        this.updateKeyVisualizationColors(this.musicData.majorKeyOmissionIndices);
    }

    setMusicKeyVisualData(keyType = 'major') {
        this.musicKeyVisual.data = this.googleChartService.getKeyDataSet(keyType);
    }

    updateKeyVisualizationColors(indices: number[]) {

        let bgColors = this.musicService.getCurrentBackgroundColors();
        bgColors = this.whiteOutKeyPositions(indices, bgColors);

        this.musicKeyVisual.googleChartOptions = this.googleChartService.updateChartOptions(this.currentChartDimension, bgColors);
    }

    whiteOutKeyPositions(indices: number[], bgColors: string[]): string[] {
        indices.forEach(index => bgColors[index] = '#fff');
        return bgColors;
    }
}

export class IntervalState {
    showingRoot: boolean;
    showing2nd: boolean;
    showing3rd: boolean;
    showing4th: boolean;
    showing5th: boolean;
    showing6th: boolean;
    showing7th: boolean;
    showingMajorKey: boolean;
}