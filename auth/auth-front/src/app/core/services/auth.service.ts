import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = 'http://localhost:3000';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public signin(payload: {email:string, password:string}): Observable<any>{
    return this.http.post<{token: string}>(`${this.url}/sign`,payload)
    .pipe(
      tap((res)=>{
        localStorage.setItem('access_token', res.token)
        this.router.navigate(['admin'])
      }),
      catchError(err => {
        if(err.error.message){
          return throwError(()=>err.error.message)
        }
        return throwError(()=>"Nao foi possivel validar")
      })
    )
  }

  public logout(){
    localStorage.removeItem('access_token')
    return this.router.navigate([''])
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token')
    if(!token) return false
    const jwtHelper = new JwtHelperService()
    return !jwtHelper.isTokenExpired(token)
  }

}
