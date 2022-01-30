import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-reservation',
  templateUrl: './confirm-reservation.component.html',
  styleUrls: ['./confirm-reservation.component.css']
})
export class ConfirmReservationComponent implements OnInit {
  private reservationId:any;
  reservationData:any;
  constructor(private reservationService:ReservationService, private activatedRoute:ActivatedRoute ){ }

  ngOnInit(): void {
    this.confrimReservation();
  }

  public confrimReservation(){
    this.reservationId =  this.activatedRoute.snapshot.paramMap.get('reservationId');
    this.reservationService.searchReservationById(Number.parseInt(this.reservationId)).subscribe((reservationRes)=>{this.reservationData = reservationRes});
    alert(this.reservationData.reservationId);
  }
}
