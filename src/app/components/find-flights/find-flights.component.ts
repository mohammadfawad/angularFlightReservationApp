
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-find-flights',
  templateUrl: './find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {
  departureFrom:string = "AUS";
  arrivalTo:string = "NYC";
  dapartureDate:string = "02/05/2018";


  constructor(private reservationService:ReservationService, private router:Router) { }

  ngOnInit(): void {
  }

  public onSubmit(formData:any){
    this.reservationService.searchFlights(formData.departureFrom, formData.arrivalTo,formData.dapartureDate).subscribe((flights)=> {this.reservationService.setflightData(flights)});
    this.router.navigate(['/displayFlights']);

  }
}
