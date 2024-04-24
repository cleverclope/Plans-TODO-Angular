import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { DeletePlanComponent } from 'src/app/agenda-this-week/delete-plan/delete-plan.component';
import { GetTasksDTO } from 'src/app/agenda-this-week/dto';
import { NewUserComponent } from './new-user/new-user.component';
import { GetUsersDTO, UserDTO } from '../authDTO';
import { AuthService } from '../services/auth.service';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss'],
})
export class EnrollmentsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'select',
    'index',
    'username',
    'email',
    'roles',
    'action',
  ];

  usersDataSource: MatTableDataSource<GetUsersDTO> =
    new MatTableDataSource<GetUsersDTO>([]);
  selection = new SelectionModel<GetUsersDTO>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    this.usersDataSource.paginator = this.paginator;
    this.usersDataSource.sort = this.sort;
  }

  dataChangeSubscription: Subscription;

  constructor(private _dialog: MatDialog, private _authService: AuthService) {
    this.dataChangeSubscription = _authService.dataChangedEvent$.subscribe(
      () => {
        this.getUsersList();
      }
    );
  }

  ngOnInit(): void {
    // this.tasksDataSource.data = usersList;
    this.getUsersList();
  }

  newUser() {
    this._dialog.open(NewUserComponent, {
      disableClose: true,
    });
  }

  getUsersList() {
    this._authService.getUsers().subscribe({
      next: (resp) => {
        console.log(resp);
        this.usersDataSource.data = resp;

        console.log(resp);
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  onEditUSer(selectedUser: GetUsersDTO) {
    this._dialog.open(EditUserComponent, {
      data: selectedUser,
      disableClose: true,
    });
  }

  onDeleteTask(selectedTask: GetTasksDTO) {
    this._dialog.open(DeletePlanComponent, {
      disableClose: true,
      data: selectedTask,
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.usersDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.usersDataSource.data.forEach((row) => this.selection.select(row));
  }
}

// const usersList: GetUsersDTO[] = [
//   {
//     username: 'Phototsystetehhs',
//     email:'co@gmail.com',
//     roles:['user']
//   },
// ];
