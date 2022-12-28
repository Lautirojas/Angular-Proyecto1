import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, map, mergeMap } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  public pokemones: any[] = [];
  public searchControl = new FormControl('');
  public form = new FormGroup({
    search: this.searchControl,
  });

  constructor(private pokemonService: PokemonService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000),
        mergeMap((value) => this.pokemonService.searchAnime(value!))
      )
      .subscribe((results) => (this.pokemones = results));
  }
}
