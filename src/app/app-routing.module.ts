import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'Auth', pathMatch:'full'},
  { path:'Auth', loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule)},
  { path:'ThisWeek',loadChildren:()=>import('./agenda-this-week/agenda-this-week.module').then((m)=>m.AgendaThisWeekModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
