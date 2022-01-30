import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  flightDetails:any;
  flightId:any;

  passengerFirstName:any;
  passengerMiddleName:any;
  passengerLastName:any;
  passengerEmail:any;
  passengerPhone:any;

  passengerNameOnCard:any;
  passangerCardNumber:any;
  passengerCardSecurityCode:any;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.getFlight();

  //alert("flight id : " + this.flightId);
  }
  public getFlight(){

    this.flightId = this.activatedRoute.snapshot.paramMap.get('flightId');
    this.reservationService.searchFlightById(this.flightId).subscribe((flightData)=>{this.flightDetails = flightData});
  }
  public reserveFlight(flightReservationData:any){
    flightReservationData.flightId = this.flightDetails.flightId;
   this.reservationService.createReservation(flightReservationData).subscribe((confirmation)=>{this.router.navigate(['confirmReservation/',confirmation.reservationId])});
  }
}
