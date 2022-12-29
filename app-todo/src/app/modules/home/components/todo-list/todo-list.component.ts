import { Component, OnInit, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {
  
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]')
  constructor(){
  }
  ngDoCheck(): void {

    if(this.taskList){
      this.taskList.sort((first, last) => 
      Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }

  ngOnInit(): void {
  }

  public setEmitTaskList(event: string){
    event.trim() && this.taskList.push({task: event, checked: false})
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm('deseja apagar?')
    if(confirm){
      this.taskList = []
    }
  }

  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm('deseja deletar?')
      confirm && this.deleteItemTaskList(index)
    }
  }

}
