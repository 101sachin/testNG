import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PmRoutingModule } from './pm-routing.module';
import { PmStepsComponent } from './pm-steps/pm-steps.component';
import { PmReportsComponent } from './pm-reports/pm-reports.component';

@NgModule({
  declarations: [PmStepsComponent, PmReportsComponent],
  imports: [
    PmRoutingModule,
    CommonModule
  ]
})
export class PmModule { }
