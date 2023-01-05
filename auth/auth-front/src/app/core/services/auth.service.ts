import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }

  public signin(payload: {email:string, password:string}): Observable<any>{
    return this.http.post(`${this.url}/sign`,payload)
    .pipe(
      tap(res=>console.log),
      catchError(err=> throwError(()=>err))
      )
  }

}
