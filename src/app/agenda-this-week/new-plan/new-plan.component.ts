import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PlansService } from '../plans.service';
import { TasksDTO } from '../dto';

@Component({
  selector: 'app-new-plan',
  templateUrl: './new-plan.component.html',
  styleUrls: ['./new-plan.component.scss'],
})
export class NewPlanComponent implements OnInit {
  newTaskFormGroup!: FormGroup;
  loading: boolean = false;
  isSavingNewTask: boolean = false;

  constructor(
    private _dialogRef: MatDialogRef<NewPlanComponent>,
    private _fb: FormBuilder,
    private _plansService: PlansService
  ) {}
  ngOnInit(): void {
    this.newTaskFormGroup = this._fb.group({
      taskName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z][A-Za-z0-9_]{2,29}$'),
        ],
      ],
    });
  }

  get formData() {
    return this.newTaskFormGroup.value;
  }

  newTask() {
    const task: TasksDTO = {
      taskName: this.formData.taskName,
    };
    this._plansService.createTask(task).subscribe({
      next: (resp) => {
        console.log('xxxxxxx');
        this.onCloseDialog()
      },
      error: (err) => {
        console.log('yyyyyyyyy');
        this.onCloseDialog()
      },
    });
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
  }

  onChange($event: Event) {}

  onCloseDialog() {
    this._dialogRef.close();
  }
}
