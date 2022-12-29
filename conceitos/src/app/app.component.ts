import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  public valor = 1;
  public destroy = true
  public addValue = 0
  public getDados: {nome: string, idade: number} | undefined
  constructor() {

  }

  add() {
    this.addValue += 1
    return this.valor += 1
  }

  setDados(event: {nome: string, idade: number}){
    console.log(event)
    this.getDados = event
  }

  destruir() {
    this.destroy = false
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
    // console.log('ngDoCheck');
  }

  ngOnInit(): void {
    console.log('init')
  }

}
