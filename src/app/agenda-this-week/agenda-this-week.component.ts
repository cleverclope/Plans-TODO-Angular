import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-agenda-this-week',
  templateUrl: './agenda-this-week.component.html',
  styleUrls: ['./agenda-this-week.component.scss']
})
export class AgendaThisWeekComponent {
  canShow:boolean = false;
  isShowing : boolean = true

  constructor(private breakpointObserver:BreakpointObserver){

  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 768px)')
  .pipe(
    map(result => {
      // console.log("result "+result)
      return result.matches
    }),
    shareReplay()
  );

  toggleSidenav(){
    this.isShowing = !this.isShowing;
  }

}
