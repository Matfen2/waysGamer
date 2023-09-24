import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoist',
  templateUrl: './todoist.component.html',
  styleUrls: ['./todoist.component.css']
})
export class TodoistComponent implements OnInit {
  title: string = '';
  type: string = '';
  studio: string = '';
  games: Array<any> = [];
  play: boolean = false;

  addGame() {
    const newGame = {
      title: this.title,
      type: this.type,
      studio: this.studio,
    }
    this.games.push(newGame);
    this.play = true;
  }

  deleteGame (index: number) {
    this.games.splice(index, 1);
  }

  clearGame() {
    this.games = [];
  }

  ngOnInit(): void {
    
  }
}
