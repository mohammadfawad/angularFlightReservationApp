import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindFlightsComponent } from './components/find-flights/find-flights.component';
import { DisplayFlightsComponent } from './components/display-flights/display-flights.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { ConfirmReservationComponent } from './components/confirm-reservation/confirm-reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReservationService } from './services/reservation.service';


@NgModule({
  declarations: [
    AppComponent,
    FindFlightsComponent,
    DisplayFlightsComponent,
    PassengerDetailsComponent,
    ConfirmReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ReservationService],
  bootstrap: [FindFlightsComponent]
})
export class AppModule { }
