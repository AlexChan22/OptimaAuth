import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from './models/token';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(body: any) {
    return this.http.post<Token>(this.baseUrl, body).pipe(
      map(usuario =>
      {
        localStorage.setItem('token', usuario.accessToken);
      }
      )
    )
  }


}
