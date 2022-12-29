import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent {

  @Output()
  public enviarDados = new EventEmitter()

  public list: Array<{nome: string, idade: number}> = [
    {nome:'joao',idade:20},
    {nome:'jose',idade:30},
    {nome:'marcos',idade:40},
  ]

  getDados(event: number){
    this.enviarDados.emit(this.list[event])
  }
}
