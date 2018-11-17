import { Component, OnInit } from '@angular/core';
import { RaffleService } from '../raffle.service';

@Component({
  selector: 'app-participants',
  template: `
    <div class="participants">
      <div>
        <label>Add Participants</label>
        <textarea #p></textarea>
        <button (click)="add(p.value)">Add</button>
      </div>
      <div>
        <h2>Raffle Participants</h2>
        <ul>
          <li *ngFor="let p of participants">{{ p[1] }} {{ p[2] }} <span class="remove" (click)="remove(p)">X</span></li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  participants;

  constructor(private raffle: RaffleService) {
  }

  ngOnInit() {
    this.participants = this.raffle.participants;
  }

  add(participants) {
    this.raffle.add(participants);
  }

  remove(participant) {
    this.raffle.removeParticipant(participant);
  }
}
