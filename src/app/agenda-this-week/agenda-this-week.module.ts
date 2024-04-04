import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaThisWeekComponent } from './agenda-this-week.component';
import { DeletePlanComponent } from './delete-plan/delete-plan.component';
import { DeletedSuccessfullyDialogComponent } from './dialog/deleted-successfully-dialog/deleted-successfully-dialog.component';
import { UpdatedSuccessfullyDialogComponent } from './dialog/updated-successfully-dialog/updated-successfully-dialog.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { UpdatePlanComponent } from './update-plan/update-plan.component';
import { AgendaThisWeekRoutesModule } from './agenda-this-week-routes.module';
import { PlansThisWeekComponent } from './plans-this-week/plans-this-week.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AgendaThisWeekComponent,
    NewPlanComponent,
    UpdatePlanComponent,
    DeletePlanComponent,
    DeletedSuccessfullyDialogComponent,
    UpdatedSuccessfullyDialogComponent,
    PlansThisWeekComponent
  ],
  imports: [
    CommonModule,
    AgendaThisWeekRoutesModule,
    MaterialModule
  ]
})
export class AgendaThisWeekModule { }
