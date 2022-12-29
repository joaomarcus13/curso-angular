import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-itens',
  templateUrl: './todo-input-itens.component.html',
  styleUrls: ['./todo-input-itens.component.scss']
})
export class TodoInputItensComponent implements OnInit {

  @Output()
  public emitItemTaskList = new EventEmitter()
  public addItemTaskList = ""

  constructor(){

  }

  public submitItemTaskList(){
    console.log(this.addItemTaskList)
    this.emitItemTaskList.emit(this.addItemTaskList)
    this.addItemTaskList = ""
  }

  ngOnInit(): void {
  }
}
