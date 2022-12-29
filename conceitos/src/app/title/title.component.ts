import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public title = 'Bem vindo'

  constructor() { }


  ngOnDestroy(): void {
    console.log('destroy');
  }
  ngOnInit(): void {
    console.log('init');
  }

  ngOnChanges(e: any): void {
    console.log('changes', e);
  }



}
