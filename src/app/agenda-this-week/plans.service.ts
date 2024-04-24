import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GetTasksDTO, TasksDTO } from './dto';
import { environment } from '../../environments/environment';

const jwt = '5a763402c770d2c7530d06e42b438a370b100363307e3804cee14799b8336504'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', jwt })
};

@Injectable({
  providedIn: 'root',
})
export class PlansService {

  private client = `${environment.baseUrl}`;

  private dataChangedSubject = new Subject<void>();

  constructor(private _http: HttpClient) {}

  createTask(tasksDTO: TasksDTO): Observable<TasksDTO[]> {
    return this._http.post<TasksDTO[]>(`${this.client}`, tasksDTO, httpOptions);
  }

  getTasks():Observable<TasksDTO[]>{
    return this._http.get<TasksDTO[]>(`${this.client}`, httpOptions)
  }

  editTask(tasksDTO:TasksDTO, id:number): Observable<TasksDTO[]>{
    return this._http.put<TasksDTO[]>(`${this.client}/${id}`, tasksDTO, httpOptions)
  }

  deleteTask(id:number):Observable<GetTasksDTO>{
    return this._http.delete<GetTasksDTO>(`${this.client}/${id}`, httpOptions)
  }

  dataChangedEvent$ = this.dataChangedSubject.asObservable();

  notifyOnDataChange() {
    this.dataChangedSubject.next();
  }
}
