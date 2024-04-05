import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlansThisWeekComponent } from './plans-this-week/plans-this-week.component';
import { AgendaThisWeekComponent } from './agenda-this-week.component';

const thisweekRoutes:Routes=[
  { path: '', redirectTo:'Agenda', pathMatch:'full'},
  { path:'Agenda', component: AgendaThisWeekComponent,
    children :[
      { path: '', redirectTo: 'Plans', pathMatch:'full'},
      { path:'Plans', component:PlansThisWeekComponent}
    ]},

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(thisweekRoutes)
  ],

  exports:[RouterModule]
})
export class AgendaThisWeekRoutesModule { }
