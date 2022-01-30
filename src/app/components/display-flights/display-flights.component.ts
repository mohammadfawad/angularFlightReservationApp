import { ReservationService } from './../../services/reservation.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {

  constructor(private reservationService:ReservationService, private router:Router) {

  }

  ngOnInit(): void {

  }

  public flights():any{
    return  this.reservationService.getflightData();
  }
  public onSelect(flightId:number){

    this.router.navigate(['/passengerDetails/',flightId]);
  }


}
