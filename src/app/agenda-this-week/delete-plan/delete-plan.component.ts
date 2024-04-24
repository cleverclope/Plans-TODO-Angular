import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetTasksDTO } from '../dto';
import { PlansService } from '../plans.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-plan',
  templateUrl: './delete-plan.component.html',
  styleUrls: ['./delete-plan.component.scss']
})
export class DeletePlanComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data:GetTasksDTO,
  private _dialog: MatDialog,
  private _toastr: ToastrService,
  private _planService: PlansService,
  private _dialogRef: MatDialogRef<DeletePlanComponent>){

  }

  deleteTask(){
    console.log(this.data.id);

    this._planService.deleteTask(this.data.id).subscribe({
      next:(resp)=>{
        this._planService.notifyOnDataChange()
        this.onCloseDialog()
        this._toastr.success('Created Task', 'SUCCESS')
      },

      error:(err)=>{
        this._toastr.error('Failed Creating Task', 'FAILED')
        this.onCloseDialog()
      }
    })

  }

  onCloseDialog() {
    this._dialogRef.close();
  }

}
