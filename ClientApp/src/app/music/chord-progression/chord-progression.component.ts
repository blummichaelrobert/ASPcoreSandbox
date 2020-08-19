import { Component, Input } from '@angular/core';
import { GoogleChartService } from '../../shared/services/google-chart.service';

import {  GooglePieChartOptions } from '../../shared/models/google-pie-chart.model';
import { MusicKey } from '../music.models';
import { MusicService } from 'src/app/shared/services/music-key.service';
import { MusicDataService } from 'src/app/shared/services/music-data.service';


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
    data: (string | number)[][];
    type = 'PieChart';

    chordProgressionHeader = 'I IV V';

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

    determineStartAngle(intervals: string[]): number {
        let startAngle = 0;
        if (intervals.length === 3)
            startAngle = -60

        if (intervals.length === 4)
            startAngle = -45

        return startAngle;
    }

    getBackgroundColors(intervals: string[]): string[] {
        const backgroundColors: string[] = [];
        intervals.forEach(interval => {
            const note = this.musicKey[interval]
            backgroundColors.push(this.musicService.getColor(note));
        });
        return backgroundColors;
    }

    handleProgressionSelected(intervals: string[]) {

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
}
