import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BaseballPlayer } from 'src/app/baseball/models/baseball.models';

@Injectable()
export class BaseballHTTPService {

    private readonly SERVICE_URL = 'https://lookup-service-prod.mlb.com';
    private readonly GET_40_MAN_ROSTER = `/json/named.roster_40.bam?team_id=`;

    

    myApiUrl: string;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8'
        })
    };

    constructor(private http: HttpClient) { 
        this.myApiUrl = 'api/BaseBallTeam/';
    }

    getPlayer() {
        const uri = `${this.SERVICE_URL}/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='corbin%25'`;
        //console.log(uri);
        return this.http.get(uri);
    }

    get40ManRoster(teamCode: string) {
        const uri = `${this.SERVICE_URL}${this.GET_40_MAN_ROSTER}${teamCode}`;
        //console.log(uri);
        return this.http.get(uri);
    }

    getRosterFromContext(teamId: string) {
        return this.http.get(`https://localhost:44336/api/pitchers/GetPitchersByTeam/${teamId}`, this.httpOptions).pipe( retry(1),
        catchError((this.errorHandler)));
    }

    getMorePlayerData(id: string) {
        const uri = `${this.SERVICE_URL}/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2019'&player_id='${id}'`;
        return this.http.get(uri);
    }

    getMorePitcherData(id: string) {
        const uri = `https://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id='mlb'&game_type='R'&season='2019'&player_id='${id}'`;
        return this.http.get(uri);
    }

    loadPlayerData(player: BaseballPlayer) {
        const body = player;
        console.log(JSON.stringify(player));
        return this.http.post(`https://localhost:44336/api/baseballplayers`, JSON.stringify(body), this.httpOptions) .pipe(
            retry(1),
            catchError((this.errorHandler))
        );
    }

    loadPitcherData(player: BaseballPlayer) {
        const body = player;
        console.log(JSON.stringify(player));
        return this.http.post(`https://localhost:44336/api/pitchers`, JSON.stringify(body), this.httpOptions) .pipe(
            retry(1),
            catchError((this.errorHandler))
        );
    }

    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
      }
}

