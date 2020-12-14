import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MissionOptionsComponent } from "./mission-options.component";

@NgModule({
    declarations: [MissionOptionsComponent],
    imports: [CommonModule],
    exports: [MissionOptionsComponent]
})

export class MissionOptionsModule {}