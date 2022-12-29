import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {
  public nome = 'joao'
  public checkedDisabled = false

  public position: { x: number, y: number } = { x: 0, y: 0 }

  public alertaInfo(event: MouseEvent) {
    console.dir(event)
  }
  public mouseMove(event: MouseEvent) {
    // console.dir(event)
    this.position.x = event.offsetX
    this.position.y = event.offsetY
  }
}
