import { Injectable } from "@angular/core";
import { BaseballData } from "./baseball.data";


@Injectable()
export class BaseballDataService {
    baseBallData: BaseballData = new BaseballData();

    getTeamCodeFromTeamName(teamName: string): string {
       const mapEntries = [... this.baseBallData.teamIdToNameMap.entries()];

       const teamCode = mapEntries.find(entry => entry[1] === teamName);

       return teamCode[0];
    }
}