import { NgModule } from '@angular/core';
import { BaseballComponent } from './baseball.component';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
      imports: [
        CommonModule,
        GoogleChartsModule
      ],
      declarations: [BaseballComponent],
      providers: []
  })

  export class BaseballModule {}
