import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StarShipCommanderTitleContainer } from "./sc-title.container";

 @NgModule({
     declarations: [StarShipCommanderTitleContainer],
     imports: [RouterModule],
     exports: [StarShipCommanderTitleContainer]
 })

 export class StarshipCommanderTitleModule {}