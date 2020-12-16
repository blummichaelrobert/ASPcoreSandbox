import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { CommanderDashboardContainer } from "./commander-dashboard.container";

@NgModule({
    declarations: [CommanderDashboardContainer],
    exports: [],
    imports: [
        MatExpansionModule,
        RouterModule
    ],
    providers: []
})

export class CommanderDashboardContainerModule {}