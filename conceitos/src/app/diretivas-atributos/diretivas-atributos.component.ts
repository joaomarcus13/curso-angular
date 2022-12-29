import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor = false
  public nome = ''
  public list: string[] = ['joao']
  public height = '20px'
  constructor() { }

  add() {
    if (this.nome) {
      this.list.push(this.nome)
      this.nome = ''
    }
  }

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor
      this.height = this.height == '20px' ? '25px' : '20px'
    }, 2000)
  }


}
