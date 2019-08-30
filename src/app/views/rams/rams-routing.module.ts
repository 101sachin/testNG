import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GeoFancingComponent } from "./geo-fancing/geo-fancing.component";
import { CustomFormsComponent } from "./custom-forms/custom-forms.component";

const routes: Routes = [
  {
    path: "",
    component: CustomFormsComponent
  },
  {
    path: "geo-fancing",
    component: GeoFancingComponent
  },
  {
    path: "custom-forms",
    component: CustomFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamsRoutingModule {}
