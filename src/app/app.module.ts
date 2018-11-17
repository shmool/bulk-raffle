import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantsComponent } from './participants/participants.component';
import { RaffleComponent } from './raffle/raffle.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent,
    RaffleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
