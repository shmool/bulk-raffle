import { Component, OnInit } from '@angular/core';
import { RaffleService } from '../raffle.service';

@Component({
  selector: 'app-raffle',
  styleUrls: ['./raffle.component.scss'],
  template: `
    <label>Number of winners<input type="number" value="1" #num></label>
    <div class="raffle-button-container"><button (click)="doRaffle(num.value)" class="raffle">Raffle</button></div>
    <button (click)="reset()">Reset</button>

    <h2>Winners</h2>
    <ul>
      <li *ngFor="let winner of winners">{{winner[0]}} {{ winner[1] }} {{ winner[2] }}<span class="remove" (click)="remove(winner)">X</span></li>
    </ul>

    <h2>Removed</h2>
    <ul>
      <li *ngFor="let p of removed">{{ p[1] }} {{ p[2] }}</li>
    </ul>
  `
})
export class RaffleComponent implements OnInit {
  winners;
  removed;

  constructor(private raffle: RaffleService) {
  }

  ngOnInit() {
    this.winners = this.raffle.winners;
    this.removed = this.raffle.removed;
  }

  doRaffle(num) {
    this.raffle.doRaffle(num);
  }

  reset() {
    this.raffle.reset();
  }

  remove(winner) {
    this.raffle.removeWinner(winner);
  }
}
