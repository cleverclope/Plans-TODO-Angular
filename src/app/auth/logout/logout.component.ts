import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {
  constructor(
    private _dialogRef: MatDialogRef<LogoutComponent>,
    private _authService: AuthService,
    private _storageService: StorageService,
    private _router: Router
  ) {}

  logout(): void {
    this._authService.logout().subscribe({
      next: (res) => {
        console.log(res);
        this._storageService.clean();
        this._router.navigateByUrl('');
        this.closeDialog()

        // window.location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  closeDialog(){
    this._dialogRef.close()
  }
}
