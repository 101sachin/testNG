import { NgModule } from "@angular/core";
import { ManageKareRoutingModule } from "./manage-kare-routing.module";
import { ManageKareComponent } from "./manage-kare.component";
import { AssetsComponent } from "./assets/assets.component";
import { SubAssetsComponent } from "./sub-assets/sub-assets.component";
import { AssetSeriesComponent } from './asset-series/asset-series.component';
import { SmsComponent } from './sms/sms.component';
import { ClientsComponent } from './clients/clients.component';
import { SiteidsComponent } from './siteids/siteids.component';
import { MdataComponent } from './mdata/mdata.component';
import { CommonModule } from '@angular/common';
import { MdataService } from '../../services/mdata.service';
import { ClientService } from '../../services/clients.service';
import { AssetAddComponent } from './assets/asset-add.component';
import { AssetsXlsComponent } from './assets/assets-xls.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ManageKareRoutingModule
  ],

  declarations: [
    ManageKareComponent, 
    AssetsComponent,
    SubAssetsComponent, 
    AssetSeriesComponent,
    SmsComponent,
    ClientsComponent, 
    SiteidsComponent,
    MdataComponent,
    AssetAddComponent,
    AssetsXlsComponent
  ],
    providers: [MdataService,ClientService]
})
export class ManageKareModule {}
