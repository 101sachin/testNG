import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PmStepsComponent } from "./pm-steps/pm-steps.component";
import { PmReportsComponent } from "./pm-reports/pm-reports.component";

const routes: Routes = [
  {
    path: "",
    component: PmStepsComponent
  },
  {
    path: "reports",
    component: PmReportsComponent
  }
];

alert('==============');

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PmRoutingModule {}
