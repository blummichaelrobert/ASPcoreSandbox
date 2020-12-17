import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material";
import { ExpansionPanelComponent } from "./expansion-panel.component";

@NgModule({
    declarations: [ExpansionPanelComponent],
    exports: [ExpansionPanelComponent],
    imports: [
        MatExpansionModule
    ], 
    providers: []
})

export class ExpansionPanelModule {}