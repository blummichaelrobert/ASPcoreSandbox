import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ExpansionPanelModule } from "../../components/expansion-panel/expansion-panel.module";
import { CommanderDashboardContainer } from "./commander-dashboard.container";

@NgModule({
    declarations: [CommanderDashboardContainer],
    exports: [],
    imports: [
        ExpansionPanelModule,
        RouterModule
    ],
    providers: []
})

export class CommanderDashboardContainerModule {}