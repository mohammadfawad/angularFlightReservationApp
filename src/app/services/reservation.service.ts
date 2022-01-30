import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ServiceNameService {

  constructor(private httpClient: HttpClient) { }

}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private searchFlightUrl:string;
  private createReservationUrl:string;
  private searchReservationUrl:string;
  private flightData:any;



  constructor(private httpClient:HttpClient) {
    this.searchFlightUrl = "http://localhost:8082/flightReservation/flights";
    this.createReservationUrl = "http://localhost:8082/flightReservation/createreservation";
    this.searchReservationUrl = "http://localhost:8082/flightReservation/reservations/";
   }
  // http://localhost:8082/flightReservation/flights?departureCity=AUS&arrivalCity=NYC&departureDate=02/05/2018
  public searchFlights(departureFrom:string, arrivalTo:string, flightDate:string):Observable<any>{
    this.searchFlightUrl = this.searchFlightUrl + "?departureCity="+departureFrom+"&arrivalCity="+arrivalTo+"&departureDate="+flightDate;
    console.log(this.searchFlightUrl);
    return this.httpClient.get<any>(this.searchFlightUrl);
  }
  //http://localhost:8082/flightReservation/flights/2
  public searchFlightById(flightId:number):Observable<any>{
    this.searchFlightUrl = this.searchFlightUrl + "/" + flightId;
    return this.httpClient.get<any>(this.searchFlightUrl);
  }
  //http://localhost:8082/flightReservation/createreservation
  public createReservation(reservationData:any):Observable<any>{
    return this.httpClient.post(this.createReservationUrl, reservationData);
  }
  //http://localhost:8082/flightReservation/reservations/51
  public searchReservationById(reservationId:number):Observable<any>{
    this.searchReservationUrl = this.searchReservationUrl + reservationId;
    return this.httpClient.get<any>(this.searchReservationUrl);
  }

  public setflightData(resultFlightData:any){
    this.flightData = resultFlightData;
  }
  public getflightData():any{
    return this.flightData;
  }



}
