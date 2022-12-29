import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public list: Array<{comida: string, preco: number}> = [
    {comida: 'x-salada',preco:10},
    {comida: 'x-bacon',preco:12},
    {comida: 'coxinha',preco:14}
  ]
  constructor(){}

  submitForm(form: NgForm){
    console.log(form.value)
  }
}
