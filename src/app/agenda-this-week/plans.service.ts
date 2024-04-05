import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksDTO } from './dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  private client = `${environment.baseUrl}`;

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
}
