import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDTO, UserDTO } from '../authDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

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
}
