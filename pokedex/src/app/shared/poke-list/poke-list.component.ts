import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    const subscribe = {
      next: (res: any) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error: () => {
        this.apiError = true;
      },
    };
    this.pokeApiService.apiListAllPokemons.subscribe(subscribe);
  }

  getSearch(value: string) {
    this.getAllPokemons = this.setAllPokemons.filter((e: any) => {
      return e.name.toLowerCase().includes(value.toLowerCase());
    });
  }
}
