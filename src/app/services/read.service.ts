import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CampaignModel } from '../models/campaign.model';

@Injectable({
  providedIn: 'root'
})
export class ReadService {

  private url = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  campaigns(): Observable<CampaignModel[]> {

    return this.http.get<CampaignModel[]>(`${this.url}/campaign/getall`);

  }
}
