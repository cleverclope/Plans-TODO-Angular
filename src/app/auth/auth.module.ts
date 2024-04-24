import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRoutesModule } from './auth-routes.module';
import { MaterialModule } from '../material/material.module';
import { LogoutComponent } from './logout/logout.component';
import { EnrollComponent } from './enroll/enroll.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    EnrollComponent,
    LogoutComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutesModule,
    MaterialModule,
    HttpClientModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
