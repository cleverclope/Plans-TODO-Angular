import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlansThisWeekComponent } from './plans-this-week/plans-this-week.component';
import { AgendaThisWeekComponent } from './agenda-this-week.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth/services/auth.service';
import { EnrollmentsComponent } from '../auth/enrollments/enrollments.component';

const thisweekRoutes: Routes = [
  { path: '', redirectTo: 'Agenda', pathMatch: 'full' },
  {
    path: 'Agenda',
    component: AgendaThisWeekComponent,
    children: [
      { path: '', redirectTo: 'Plans', pathMatch: 'full' },
      { path: 'Plans', component: PlansThisWeekComponent },
      { path: 'Users', component:EnrollmentsComponent}
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(thisweekRoutes),
  ],
  providers: [AuthService],
  exports: [RouterModule],
})
export class AgendaThisWeekRoutesModule {}
