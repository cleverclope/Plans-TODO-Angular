import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../auth/services/auth.service';
import { StorageService } from '../auth/services/storage.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../auth/logout/logout.component';

@Component({
  selector: 'app-agenda-this-week',
  templateUrl: './agenda-this-week.component.html',
  styleUrls: ['./agenda-this-week.component.scss'],
})
export class AgendaThisWeekComponent {
  canShow: boolean = false;
  isShowing: boolean = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _dialog: MatDialog
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe('(max-width: 768px)')
    .pipe(
      map((result) => {
        // console.log("result "+result)
        return result.matches;
      }),
      shareReplay()
    );

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  logout(){
    this._dialog.open(LogoutComponent, {
      disableClose:true,
      width:'200px',
      height:'100px'
    })
  }

}
