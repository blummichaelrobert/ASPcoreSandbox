import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BaseballHTTPService {

    private readonly SERVICE_URL = 'https://lookup-service-prod.mlb.com';
    private readonly GET_40_MAN_ROSTER = `/json/named.roster_40.bam?team_id=`;

    teamCodeMap: Map<string, string> = new Map([
        ['bal', '110'],
        ['box', '111'],
        ['nya', '147'],
        ['tba', '139'],
        ['tor', '141'],
        ['cha', '145'],
        ['cle', '114'],
        ['det', '116'],
        ['kca', '118'],
        ['min', '142'],
        ['hou', '117'],
        ['ana', '108'],
        ['oak', '133'],
        ['sea', '136'],
        ['tex', '140'],
        ['atl', '144'],
        ['mia', '146'],
        ['nym', '121'],
        ['phi', '143'],
        ['chn', '112'],
        ['cin', '113'],
        ['mil', '158'],
        ['pit', '134'],
        ['sln', '138'],
        ['ari', '109'],
        ['col', '115'],
        ['lan', '119'],
        ['sdn', '135'],
        ['sfn' , '137']
    ]);

    constructor(private http: HttpClient) { }

    getPlayer() {
        const uri = `${this.SERVICE_URL}/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='cueto%25'`;
        console.log(uri);
        return this.http.get(uri);
    }

    get40ManRoster(teamCode: string) {
        const uri = `${this.SERVICE_URL}${this.GET_40_MAN_ROSTER}${teamCode}`;
        console.log(uri);
        return this.http.get(uri);
    }
}