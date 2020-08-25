import { NgModule } from '@angular/core';
import { BaseballComponent } from './baseball.component';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';
import { BaseballDataService } from './baseball.service';

@NgModule({
      imports: [
        CommonModule,
        GoogleChartsModule
      ],
      declarations: [BaseballComponent],
      providers: [BaseballDataService]
  })

  export class BaseballModule {}
