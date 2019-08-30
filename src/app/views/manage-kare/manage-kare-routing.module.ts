import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SubAssetsComponent } from "./sub-assets.component";
import { AssetsComponent } from "./assets.component";
import { AssetSeriesComponent } from './asset-series/asset-series.component';
import { ClientsComponent } from './clients/clients.component';
import { SmsComponent } from './sms/sms.component';
import { MdataComponent } from './mdata/mdata.component';
import { SiteidsComponent } from './siteids/siteids.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Manage Kare"
    },
    children: [
      {
        path: "assets",
        component: AssetsComponent
      },
      {
        path: "sub-assets",
        component: SubAssetsComponent
      },
      {
        path: "asset-series",
        component:AssetSeriesComponent
      },
      {
        path:'clients',
        component:ClientsComponent
      },
      {
        path:'sms',
        component:SmsComponent
      },
      {
        path:'master-data',
        component:MdataComponent
      },
      {
        path:'siteid',
        component:SiteidsComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageKareRoutingModule {}
