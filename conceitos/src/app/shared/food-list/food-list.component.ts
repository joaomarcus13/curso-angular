import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList[] = []

  constructor(private foodListService: FoodListService){
  }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      (res) => {
        this.foodList = res
        console.log(this.foodList)
      }
    )
    this.foodListService.emitEvent.subscribe((res)=>{
      // alert(`item adicionado ${res.nome}`)
      this.foodList.push(res)
    })
  }

  foodListDelete(id: number){
    this.foodListService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(e=>e.id!==id)
      }
    )
  }

  foodListEdit({nome, id}:{nome:string, id:number}){
    this.foodListService.foodListEdit(nome, id).subscribe(
      res=>{
        console.log(res)
      }
    )
  }

}
