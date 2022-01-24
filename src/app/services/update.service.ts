import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CampaignModel } from '../models/campaign.model';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private url = environment.baseUrl;
  
  constructor(private http: HttpClient) {
  }

  updateCampaign(campaign: CampaignModel) {

    return this.http.post(`${this.url}/campaign/update`, campaign).pipe(map(resp => {
      return resp;
    }));

  }
}
