import { Time } from "@angular/common";

export class CampaignModel{
    idCampaign!: number;
    campaign!: string;
    campaignCode!: string;
    startDate!: Date;
    endDate!: Date;
    startHour!: Time;
    endHour!: Time;
    click!: number;
    impression!: number;
    budget!: number;
    customerAccount!: string;
    idPlatform!: number;
    platform!: string;
}