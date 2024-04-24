import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from '../authDTO';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.scss'],
})
export class EnrollComponent implements OnInit {
  enrollmentFormGroup!: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  selectedValue !: string;

   roles:Roles[]=[
    {id: '1', name:'user'},
    {id: '2', name:'mod'},
    {id: '3', name:'ROLE_ADMIN'}
  ]


  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.enrollmentFormGroup = this._fb.group({
      email: ['', [Validators.required]],
      username: [''],
      password: [''],
      role: [['']],
    });
  }

  get formData() {
    return this.enrollmentFormGroup.value;
  }

  doEnrollHere() {
    const userDTO: UserDTO = {
      username: this.formData.username,
      email: this.formData.email,
      password: this.formData.password
    };

    console.log(userDTO);

    this._authService.enrolUser(userDTO).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this._route.navigateByUrl('');
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        alert(err.error.message)
        console.log(err);
      },
    });
  }
}

export interface Roles{
  id: string
  name: string
}


