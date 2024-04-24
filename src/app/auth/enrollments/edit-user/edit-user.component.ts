import { Component, Inject, OnInit } from '@angular/core';
import { NewUserComponent } from '../new-user/new-user.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GetUsersDTO, UserDTO } from '../../authDTO';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent implements OnInit {
  editFormGroup!: FormGroup;
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
    @Inject(MAT_DIALOG_DATA) public data: GetUsersDTO,
    private _authService: AuthService,
    private _dialogRef: MatDialogRef<NewUserComponent>,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.editFormGroup = this._fb.group({
      email: [this.data.email, [Validators.required]],
      username: [this.data.username],
      password: [this.data.roles],
      role: [['']],
    });
  }

  get formData() {
    return this.editFormGroup.value;
  }

  updateUser() {
    const userDTO: UserDTO = {
      username: this.formData.username,
      email: this.formData.email,
      password: this.formData.password,
    };

    console.log(userDTO);
    this.closeDialog()

    // this._authService.enrolUser(userDTO).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this._authService.notifyOnDataChange();
    //     this.closeDialog()
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   error: (err) => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //     alert(err.error.message);
    //     console.log(err);
    //   },
    // });
  }

  closeDialog() {
    this._dialogRef.close();
  }
}

export interface Roles {
  id: string;
  name: string;
}
