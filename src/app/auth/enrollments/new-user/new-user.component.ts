import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from '../../authDTO';
import { AuthService } from '../../services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  enrollmentFormGroup!: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  selectedValue!: string;

  roles: Roles[] = [
    { id: '1', name: 'user' },
    { id: '2', name: 'mod' },
    { id: '3', name: 'ROLE_ADMIN' },
  ];

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _dialogRef: MatDialogRef<NewUserComponent>,
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

  saveUser() {
    const userDTO: UserDTO = {
      username: this.formData.username,
      email: this.formData.email,
      password: this.formData.password,
    };

    console.log(userDTO);

    this._authService.enrolUser(userDTO).subscribe({
      next: (data) => {
        console.log(data);
        this._authService.notifyOnDataChange();
        this.closeDialog()
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        alert(err.error.message);
        console.log(err);
      },
    });
  }

  closeDialog() {
    this._dialogRef.close();
  }
}

export interface Roles {
  id: string;
  name: string;
}
