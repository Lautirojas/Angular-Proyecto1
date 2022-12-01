import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/jugadores.model';

@Component({
  selector: 'app-my-content',
  templateUrl: './my-content.component.html',
  styleUrls: ['./my-content.component.css'],
})
export class MyContentComponent implements OnInit {
  public players: Player[] = [
    new Player(true, 'Emiliano Martínez', 30),
    new Player(false, 'Franco Armani', 36),
    new Player(false, 'Gerónimo Rulli ', 30),
    new Player(true, 'Nahuel Molina', 24),
    new Player(false, 'Gonzalo Montiel', 25),
    new Player(true, 'Cristian Romero', 24),
    new Player(false, 'Germán Pezzella', 31),
  ];

  constructor() {}

  ngOnInit() {}
}
