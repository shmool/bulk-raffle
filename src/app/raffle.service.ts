import { Injectable } from '@angular/core';

const participantsStorage = 'raffle-participants';
const winnersStorage = 'raffle-winners';
const removedStorage = 'raffle-removed';

function getFromStorage(key) {
  const storageData = localStorage.getItem(key);
  if (storageData) {
    return storageData ? JSON.parse(storageData) : null;
  }
}

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

@Injectable({
  providedIn: 'root'
})
export class RaffleService {
  participants = [];
  removed = [];
  winners = [];

  constructor() {
    this.participants = getFromStorage(participantsStorage) || [];
    this.winners = getFromStorage(winnersStorage) || [];
    this.removed = getFromStorage(removedStorage) || [];
  }

  add(participants) {
    const participantsArray = participants.split('\n').map(p => p.split('\t'));
    participantsArray.forEach(p => {
      if (!this.participants.find(participant => participant[0] === p[0]) && p[0].length > 0) {
        this.participants.push(p);
      }
    });
    saveToStorage(participantsStorage, this.participants);
  }

  removeParticipant(participant) {
    this.remove(participant, this.participants, participantsStorage);
  }

  doRaffle(num) {
    for (let i = 0; i < num; i++) {
      const winnerIndex = Math.floor(Math.random() * this.participants.length);
      console.log(winnerIndex)
      console.log(this.participants[winnerIndex]);
      this.winners.push(this.participants[winnerIndex]);
      saveToStorage(winnersStorage, this.winners);
      this.participants.splice(winnerIndex, 1);
      saveToStorage(participantsStorage, this.participants);
    }
  }

  removeWinner(winner) {
    this.remove(winner, this.winners, winnersStorage);
    this.removed.push(winner);
    saveToStorage(removedStorage, this.removed);
  }

  remove(who, from, storage) {
    const i = from.findIndex(p => who[0] === p[0]);
    from.splice(i, 1);
    saveToStorage(storage, from);
    return who;
  }

  reset() {
    this.participants.push(...this.winners);
    this.participants.push(...this.removed);
    this.winners = [];
    this.removed = [];
    saveToStorage(participantsStorage, this.participants);
    saveToStorage(winnersStorage, this.winners);
    saveToStorage(removedStorage, this.removed);
  }
}
