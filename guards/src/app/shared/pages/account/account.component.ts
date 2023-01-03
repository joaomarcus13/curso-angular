import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  
  public exit(): boolean {
    if(confirm('voce quer sair')){
      return true
    }
    return false
  }
}
