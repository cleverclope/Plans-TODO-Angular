import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GetTasksDTO, TasksDTO } from '../dto';
import { PlansService } from '../plans.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-plan',
  templateUrl: './update-plan.component.html',
  styleUrls: ['./update-plan.component.scss'],
})
export class UpdatePlanComponent implements OnInit {
  updateTaskFormGroup!: FormGroup;
  loading: boolean = false;
  isSavingNewTask: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: GetTasksDTO,
    private _dialogRef: MatDialogRef<UpdatePlanComponent>,
    private _fb: FormBuilder,
    private _planService: PlansService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.updateTaskFormGroup = this._fb.group({
      taskName: [
        this.data.taskName,
        [
          Validators.required
        ],
      ],
    });
  }

  get formData() {
    return this.updateTaskFormGroup.value;
  }

  updateTask() {
    const updateDetails: TasksDTO = {
      taskName: this.formData.taskName,
      };
    this._planService.editTask(updateDetails, this.data.id).subscribe({
      next: (resp) => {
        console.log(resp);
        this._planService.notifyOnDataChange();
        this.onCloseDialog()
        this.toastr.success('Task Updated !','SUCCESSFUL')
      },
      error: (err) => {
        console.log(err);
        this.onCloseDialog()
        this.toastr.error('Something Went Wrong','FAILED EDITING')
      },
    });
  }

  onCloseDialog() {
    this._dialogRef.close();
  }
}
