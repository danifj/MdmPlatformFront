import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CampaignModel } from '../models/campaign.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  private url = environment.baseUrl;
  
  constructor(private http: HttpClient) {
  }

  addCampaign(campaign: CampaignModel) {

    return this.http.post(`${this.url}/campaign/add`, campaign).pipe(map(resp => {
      return resp;
    }));

  }
}
