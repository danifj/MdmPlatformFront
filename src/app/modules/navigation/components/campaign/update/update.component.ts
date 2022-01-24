import { Component, OnInit, Inject } from '@angular/core';

import {SelectionModel} from "@angular/cdk/collections";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from '../campaign.component';
import { CampaignModel } from '../../../../../models/campaign.model';

import { UpdateService } from '../../../../../services/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  updateForm = this.fb.group({
    idCampaign: this.data.idCampaign,
    campaign: this.data.campaign,
    campaignCode: [this.data.campaignCode, Validators.required],
    customerAccount: [this.data.customerAccount, Validators.required],
    // platform: [this.data.platform, Validators.required],
    idPlatform: [ this.data.idPlatform , Validators.required] ,
    click: [this.data.click, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
    impression: [this.data.impression, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])]
  });

  platforms = [
    {name: 'Google Ads', abbreviation: '1'},
    {name: 'Video 360', abbreviation: '2'},
    {name: 'Facebook', abbreviation: '3'}  ];

  toppings: FormGroup;

  constructor(private fb: FormBuilder,
    public updateDialogRef: MatDialogRef<UpdateComponent>,
    private update: UpdateService,
    @Inject(MAT_DIALOG_DATA) public data:DialogData,) {

    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.updateForm.value.idCampaign = this.data.idCampaign;
    this.updateCampaign(this.updateForm.value);
    this.updateDialogRef.close(this.updateForm.value);
  }

  updateCampaign(campaign: CampaignModel): Promise<string> {

    return new Promise((resolve, reject) => {
      this.update.updateCampaign(campaign).subscribe( resp => {
        resolve(resp[0]);
        }, (err) => {
          reject(err);
      });
    });
    
  }

  compareObjects(id1: any, id2: any): boolean {
    const a1 = determineId(id1);
    const a2 = determineId(id2);
    return a1 === a2;
  }

}

export function determineId(id: any): string {
  if (id.constructor.name === 'array' && id.length > 0) {
     return '' + id[0];
  }
  return '' + id;
}
