import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const loginRoutes:Routes=[
  { path: '', redirectTo:'Login', pathMatch:'full'},
  { path:'Login', component:LoginComponent},
  { path:'Enroll', component:EnrollComponent},
  { path: 'Forgot', component:ForgotPasswordComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  exports:[RouterModule]
})
export class AuthRoutesModule { }
