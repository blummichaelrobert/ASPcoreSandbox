import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class BaseballHTTPService {

    private readonly SERVICE_URL = 'https://lookup-service-prod.mlb.com';

    constructor(private http: HttpClient) { }

    getPlayer() {
        const uri = `${this.SERVICE_URL}/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='cespedes%25'`;
        console.log(uri);
        return this.http.get(uri);
    }
}