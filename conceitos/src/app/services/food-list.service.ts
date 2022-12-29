import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter()

  private list: Array<string> = [
    "x bacon",
    'feijao',
    'ovo'
  ]
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  private url = 'http://localhost:3000/' //list-food
  constructor(private http: HttpClient) { }

  // public foodList() {
  //   return this.list
  // }
  public foodList(): Observable<FoodList[]> {
    return this.http
          .get<FoodList[]>(`${this.url}list-food`)
          .pipe(res=>{
            console.log(res)
            return res
          },error=>error)
  }

  // public foodListAdd(value: string) {
  //     this.foodListAlert(value)
  //     return this.list.push(value)
  // }
  public foodListAdd(value: string): Observable<FoodList> {
      return this.http
      .post<FoodList>(`${this.url}list-food`, {nome: value}, this.httpOptions)
      .pipe(
        map(e=>({id: e.id, nome: e.nome.toUpperCase()}))
      )
  }
  public foodListEdit(value: string, id: number): Observable<FoodList> {
      return this.http
      .put<FoodList>(`${this.url}list-food/${id}`, {nome: value})
      .pipe(
        res=>res
      )
  }
  public foodListDelete(id: number): Observable<FoodList> {
      return this.http
      .delete<FoodList>(`${this.url}list-food/${id}`)
      .pipe(
        res=>res
      )
  }



  public foodListAlert(value: FoodList){
    return this.emitEvent.emit(value)
  }

}
