import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public switch = 'joao'

  public list: { nome: string }[] = [{ nome: 'joao' }, { nome: 'marcos' }]
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    }, 2000)
  }

  public onClick() {
    this.conditionClick = !this.conditionClick
  }

  onClickAddList() {
    this.list.push({ nome: 'nome' })
  }

}
