import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetUsersDTO, LoginDTO, UserDTO } from '../authDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  private dataChangedSubject = new Subject<void>();

  enrolUser(userDTO: UserDTO): Observable<UserDTO[]> {
    return this._http.post<UserDTO[]>(
      `${environment.baseUrlAuth}/signup`,
      userDTO, httpOptions
    );
  }

  loginUser(loginData: LoginDTO): Observable<LoginDTO[]> {
    return this._http.post<LoginDTO[]>(
      `${environment.baseUrlAuth}/signin`,
      loginData, httpOptions
    );
  }

  getUsers():Observable<GetUsersDTO[]>{
    return this._http.get<GetUsersDTO[]>(`${environment.baseUrlAuth}`, httpOptions)
  }

  logout(): Observable<any> {
    return this._http.post(`${environment.baseUrlAuth}/signout`, httpOptions);
  }

  dataChangedEvent$ = this.dataChangedSubject.asObservable();

  notifyOnDataChange() {
    this.dataChangedSubject.next();
  }
}
