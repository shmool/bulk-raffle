import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipantsComponent } from './participants/participants.component';
import { RaffleComponent } from './raffle/raffle.component';

const routes: Routes = [
  {path: 'participants', component: ParticipantsComponent},
  {path: '', component: RaffleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
