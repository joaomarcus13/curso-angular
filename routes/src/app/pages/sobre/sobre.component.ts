import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
    constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router
      ){}


  ngOnInit(): void {
    //parametros
    this.activatedRoute.params.subscribe(
      res => console.log(res)
    )

    //query params
    this.activatedRoute.queryParams.subscribe(
      res => console.log(res)
    )
    setInterval(()=>{
      this.router.navigate([''])
    }, 5000)
  }


}
