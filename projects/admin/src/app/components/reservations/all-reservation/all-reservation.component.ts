import { Component, OnInit } from '@angular/core';
import { IReservationDetails } from '../../../models/reservation/ireservation-details';
import { ReservationService } from '../../../services/reservation/reservation.service';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { IResponse } from '../../../models/iresponse';
import { ReservationDetailsComponent } from '../reservation-details/reservation-details.component';
import { DeleteReservationComponent } from '../delete-reservation/delete-reservation.component';
import { TripService } from '../../../services/trip/trip.service';
import { ITripDetails } from '../../../models/trip/itrip-details';

@Component({
  selector: 'app-all-reservation',
  templateUrl: './all-reservation.component.html',
  styleUrls: ['./all-reservation.component.scss'],
})
export class AllReservationComponent implements OnInit {
  reservations: IReservationDetails[] = [];
  trips: ITripDetails[] = [];
  today: string | null = '';

  constructor(
    private reservationService: ReservationService,
    private tripService: TripService,
    public dialog: MatDialog,
    private dPipe: DatePipe
  ) {
    this.today = dPipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.GetAllReservations();
    this.GetAllTrips();
  }

  FilterByTripIdReservations(tripId: any) {
    if (tripId.value == 0) {
      this.GetAllReservations();
    } else {
      this.reservationService
        .FilterReservationsByTripId(tripId.value)
        .subscribe({
          next: (v) => {
            let response = v as IResponse;
            this.reservations = response.data;
          },
          // error: (e) => console.log(e),
          // complete: () => console.log('complete'),
        });
    }
  }

  FilterReservationsByDate(reservationDate: any) {
    this.reservationService
      .FilterReservationsByDate(reservationDate.value)
      .subscribe({
        next: (v) => {
          let response = v as IResponse;
          this.reservations = response.data;
        },
        // error: (e) => console.log(e),
        // complete: () => console.log('complete'),
      });
  }

  GetAllTrips() {
    this.tripService.GetAllTrips().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.trips = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  GetAllReservations() {
    this.reservationService.GetAllReservations().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.reservations = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  ReservationDetails(reservation: IReservationDetails) {
    const dialogRef = this.dialog.open(ReservationDetailsComponent, {
      width: '750px',
      data: reservation,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAllReservations();
      }
    });
  }

  DeleteReservation(reservationId: number) {
    const dialogRef = this.dialog.open(DeleteReservationComponent, {
      width: '750px',
      data: reservationId,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAllReservations();
      }
    });
  }
}
