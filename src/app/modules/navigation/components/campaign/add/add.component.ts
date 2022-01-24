import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from '../campaign.component';
import { CampaignModel } from '../../../../../models/campaign.model';

import { AddService } from '../../../../../services/add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {
  addForm = this.fb.group({
    campaign: null,
    campaignCode: [null, Validators.required],
    customerAccount: [null, Validators.required],
    idPlatform: [null, Validators.required],
    click: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])],
    impression: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(10)])]
  });

  hasUnitNumber = false;

  platforms = [
    {name: 'Google Ads', abbreviation: '1'},
    {name: 'Video 360', abbreviation: '2'},
    {name: 'Facebook', abbreviation: '3'}  ];

  constructor(private fb: FormBuilder,
    public addDialogRef: MatDialogRef<AddComponent>,
    private add: AddService,
    @Inject(MAT_DIALOG_DATA) public data:DialogData) {}

  onSubmit() {

    this.addCampaign(this.addForm.value);
    this.addDialogRef.close(this.addForm.value);
    
  }

  addCampaign(campaign: CampaignModel): Promise<string> {

    return new Promise((resolve, reject) => {
      this.add.addCampaign(campaign).subscribe( resp => {
        console.log(resp);
        resolve(resp[0]);
        }, (err) => {
          reject(err);
      });
    });
  }
}
