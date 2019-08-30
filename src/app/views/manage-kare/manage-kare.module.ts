import { NgModule } from "@angular/core";
import { ManageKareRoutingModule } from "./manage-kare-routing.module";
import { ManageKareComponent } from "./manage-kare.component";
import { AssetsComponent } from "./assets.component";
import { SubAssetsComponent } from "./sub-assets.component";
import { AssetSeriesComponent } from './asset-series/asset-series.component';
import { SmsComponent } from './sms/sms.component';
import { ClientsComponent } from './clients/clients.component';
import { SiteidsComponent } from './siteids/siteids.component';
import { MdataComponent } from './mdata/mdata.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ManageKareRoutingModule],
  declarations: [ManageKareComponent, 
    AssetsComponent,
    SubAssetsComponent, AssetSeriesComponent,
    SmsComponent, ClientsComponent, SiteidsComponent, MdataComponent]
  //providers: [AuthService]
})
export class ManageKareModule {}
