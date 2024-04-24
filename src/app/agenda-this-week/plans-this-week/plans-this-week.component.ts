import { GetTasksDTO } from './../dto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewPlanComponent } from '../new-plan/new-plan.component';
import { MatTableDataSource } from '@angular/material/table';
import { TasksDTO } from '../dto';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PlansService } from '../plans.service';
import { UpdatePlanComponent } from '../update-plan/update-plan.component';
import { DeletePlanComponent } from '../delete-plan/delete-plan.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-plans-this-week',
  templateUrl: './plans-this-week.component.html',
  styleUrls: ['./plans-this-week.component.scss'],
})
export class PlansThisWeekComponent implements OnInit {
  displayedColumns: string[] = ['select', 'index', 'taskName', 'action'];

  tasksDataSource: MatTableDataSource<TasksDTO> =
    new MatTableDataSource<TasksDTO>([]);
  selection = new SelectionModel<TasksDTO>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

   dataChangeSubscription: Subscription;

  constructor(private _dialog: MatDialog, private _planService: PlansService) {
    this.dataChangeSubscription = _planService.dataChangedEvent$.subscribe(()=>{
      this.getTasksList()
    })
  }

  ngOnInit(): void {
    // this.tasksDataSource.data = tasksList;

    this.getTasksList();
  }

  newPlan() {
    this._dialog.open(NewPlanComponent, {
      disableClose: true,
    });
  }



  getTasksList() {
    this._planService.getTasks().subscribe({
      next: (resp) => {
        console.log(resp);
        this.tasksDataSource.data = resp;
      },
      error: (err) => {
        console.log('lllllllll');
      },
    });
  }

  onEditTask(selectedTask: GetTasksDTO) {
    this._dialog.open(UpdatePlanComponent, {
      data:selectedTask,
      disableClose: true,
    });
  }

  onDeleteTask(selectedTask:GetTasksDTO) {
    this._dialog.open(DeletePlanComponent, {
      disableClose: true,
      data:selectedTask
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tasksDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.tasksDataSource.data.forEach((row) => this.selection.select(row));
  }
}

const tasksList: TasksDTO[] = [
  {
    taskName: 'Phototsystetehhs',
  },
];
