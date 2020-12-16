import { NgModule } from "@angular/core";
import { MissionOptionsModule } from "./components/mission-options/mission-options.module";
import { CommanderDashboardContainerModule } from "./containers/commander-dashboard/commander-dashboard.container.module";
import { MissionSelectContainerModule } from "./containers/mission-select/mission-select.container.module";
import { StarshipCommanderTitleModule } from "./containers/title/sc-title.module";
import { MissionsService } from "./services/missions.service";

@NgModule({
    declarations: [],
    imports: [
        CommanderDashboardContainerModule,
        MissionOptionsModule,
        MissionSelectContainerModule,
        StarshipCommanderTitleModule
    ],
    exports: [],
    providers: [MissionsService]
})

export class StarshipCommanderModule {}