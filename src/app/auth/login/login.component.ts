import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginDTO } from '../authDTO';
import { StorageService } from '../services/storage.service';
import { Roles } from '../enroll/enroll.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  roles: string[] = [];

  optionalRoles:Roles[]=[
    {id: '1', name:'user'},
    {id: '2', name:'mod'},
    {id: '3', name:'ROLE_ADMIN'}
  ]

  constructor(private _fb: FormBuilder, private _service: AuthService, private _storageSevrice:StorageService, private _router:Router) {}

  ngOnInit(): void {
    this.loginFormGroup = this._fb.group({
      username: [''],
      password: [''],
    });
  }

  get formData(){
    return this.loginFormGroup.value
  }

  loginHere(){
    const loginData:LoginDTO={
      username: this.formData.username,
      password: this.formData.password
    }

    console.log(loginData);

    this._service.loginUser(loginData).subscribe({
      next:(resp=>{
        this._storageSevrice.saveUser(resp);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.roles = this._storageSevrice.getUser().roles;
        if(this.roles=['user']){
          this._router.navigateByUrl('ThisWeek')
        }

        // this.reloadPage();
        console.log(resp);
      }),

      error:(err=>{
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log(err);
      })
    })
  }

  reloadPage(): void {
    window.location.reload();
  }
}
