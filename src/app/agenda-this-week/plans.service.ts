import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GetTasksDTO, TasksDTO } from './dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlansService {

  private client = `${environment.baseUrl}`;
  private dataChangedSubject = new Subject<void>();

  constructor(private _http: HttpClient) {}

  createTask(tasksDTO: TasksDTO): Observable<TasksDTO[]> {
    return this._http.post<TasksDTO[]>(`${this.client}`, tasksDTO);
  }

  getTasks():Observable<TasksDTO[]>{
    return this._http.get<TasksDTO[]>(`${this.client}`)
  }

  editTask(tasksDTO:TasksDTO, id:number): Observable<TasksDTO[]>{
    return this._http.put<TasksDTO[]>(`${this.client}/${id}`, tasksDTO)
  }

  deleteTask(id:number):Observable<GetTasksDTO>{
    return this._http.delete<GetTasksDTO>(`${this.client}/${id}`)
  }


  dataChangedEvent$ = this.dataChangedSubject.asObservable();

  notifyOnDataChange() {
    this.dataChangedSubject.next();
  }
}
