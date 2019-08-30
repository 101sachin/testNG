import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoFancingComponent } from './geo-fancing/geo-fancing.component';
import { CustomFormsComponent } from './custom-forms/custom-forms.component';
import { RamsReportsComponent } from './rams-reports/rams-reports.component';
import { RamsRoutingModule } from './rams-routing.module';

@NgModule({
  declarations: [GeoFancingComponent, CustomFormsComponent, RamsReportsComponent],
  imports: [
    RamsRoutingModule,
    CommonModule,
  ]
})
export class RamsModule { }
