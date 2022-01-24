import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CampaignModel } from '../../../../models/campaign.model';

import { ReadService } from '../../../../services/read.service';
import { DeleteService } from '../../../../services/delete.service';

import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

export interface DialogData {
  idCampaign: number;
  campaignCode: string;
  customerAccount: string;
  idPlatform: string;
  campaign: string,
  click: number;
  impression: number;
}

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  editCampaign: boolean;

  displayedCampaignsColumns: string[] = ['IdCampaign','Campaign','CampaignCode'/*,'StartDate','EndDate','startHour','endHour'*/,'Click','Impression','Budget','CustomerAccount','Platform'];
  @ViewChild(MatSort) campaignSort: MatSort;
  campaignsTable: MatTableDataSource<any>;
  clickedRows = new Set<CampaignModel>();

  campaign: CampaignModel = new CampaignModel();

  constructor(private read: ReadService,
    private suppress: DeleteService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.editCampaign=true;

    this.loadCampaigns().then( campaigns => {
      this.campaignsTable = new MatTableDataSource(campaigns)
      this.campaignsTable.sort = this.campaignSort})
    .catch( console.warn)
  
  }

  loadCampaigns(): Promise<CampaignModel[]> {

    return new Promise((resolve, reject) => {

      this.read.campaigns().subscribe( resp => {
        resolve(resp);
        }, (err) => {
          reject(err);
      });
    });

  }

  public openAddDialog(): void {

    const addDialogRef = this.dialog.open(AddComponent, {
      data: {}
    });

    addDialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }
  
  public openUpdateDialog(): void {

    let campaignEdit: CampaignModel = new CampaignModel();

    for (let item of this.clickedRows){

      console.log(item);
      campaignEdit.idCampaign = item['IdCampaign'];
      campaignEdit.campaign = item['Campaign'];
      campaignEdit.customerAccount = item['CustomerAccount'];
      campaignEdit.campaignCode = item['CampaignCode'];
      campaignEdit.idPlatform = item['IdPlatform'];
      campaignEdit.click = item['Click'];
      campaignEdit.impression = item['Impression'];
    }
  
    const updateDialogRef = this.dialog.open(UpdateComponent, {
      data: {idCampaign: campaignEdit.idCampaign ,campaign: campaignEdit.campaign, customerAccount: campaignEdit.customerAccount, campaignCode: campaignEdit.campaignCode, idPlatform: campaignEdit.idPlatform,
              click: campaignEdit.click, impression: campaignEdit.impression}
    });

    updateDialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }

  public delete(): void {

    for (let item of this.clickedRows){
      this.campaign.idCampaign = item['IdCampaign']
    }

    this.deleteCampaign(this.campaign);
    this.ngOnInit();

  }

  deleteCampaign(campaign: CampaignModel): Promise<string> {

    return new Promise((resolve, reject) => {
      this.suppress.deleteCampaign(campaign).subscribe( resp => {
        resolve(resp[0]);
        }, (err) => {
          reject(err);
      });
    });
    
  }


}
