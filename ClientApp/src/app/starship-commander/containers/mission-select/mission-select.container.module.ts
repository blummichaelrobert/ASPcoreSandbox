import { NgModule } from "@angular/core";
import { MissionOptionsComponent } from "../../components/mission-options/mission-options.component";
import { MissionOptionsModule } from "../../components/mission-options/mission-options.module";
import { MissionSelectContainer } from "./mission-select.container";
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    declarations: [
        MissionSelectContainer
    ],
    imports: [
        MatTabsModule,
        MissionOptionsModule
    ],
    exports: [MissionSelectContainer],
})

export class MissionSelectContainerModule {}