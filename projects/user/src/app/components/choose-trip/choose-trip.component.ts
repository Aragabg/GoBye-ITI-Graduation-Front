import { Component, OnInit } from '@angular/core';
import { IResponse } from '../../models/iresponse';
import { TripService } from '../../services/trip/trip.service';
import { ActivatedRoute } from '@angular/router';
import { ITrip } from '../../models/itrip';
import { IFilterTrip } from '../../models/ifilter-trip';
import { IBranch } from '../../models/ibranch';
import { BranchService } from '../../services/branch/branch.service';

@Component({
  selector: 'app-choose-trip',
  templateUrl: './choose-trip.component.html',
  styleUrls: ['./choose-trip.component.scss'],
})
export class ChooseTripComponent implements OnInit {
  trips: ITrip[] = [];
  filterTrip: IFilterTrip = {} as IFilterTrip;
  startBranch: IBranch = {} as IBranch;
  endBranch: IBranch = {} as IBranch;

  constructor(
    private service: TripService,
    private activatedRoute: ActivatedRoute,
    private branchService: BranchService
  ) {}

  ngOnInit(): void {
    this.filterTrip.departureDate =
      this.activatedRoute.snapshot.paramMap.get('departureDate');
    this.filterTrip.startBranchId = Number(
      this.activatedRoute.snapshot.paramMap.get('startBranchId')
    );
    this.filterTrip.endBranchId = Number(
      this.activatedRoute.snapshot.paramMap.get('endBranchId')
    );
    this.filterTrip.quantity = Number(
      this.activatedRoute.snapshot.paramMap.get('quantity')
    );

    this.FilterTrips(this.filterTrip);
    this.GetStartBranchById(this.filterTrip.startBranchId);
    this.GetEndBranchById(this.filterTrip.endBranchId);
  }

  FilterTrips(filterTrip: IFilterTrip) {
    this.service.FilterTrips(filterTrip).subscribe({
      next: (v) => {
        this.trips = v as ITrip[];
        console.log(this.trips);
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete'),
    });
  }

  GetStartBranchById(id: number) {
    this.branchService.GetStartBranchById(id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.startBranch = response.data;
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete'),
    });
  }

  GetEndBranchById(id: number) {
    this.branchService.GetEndBranchById(id).subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.endBranch = response.data;
      },
      error: (e) => console.log(e),
      complete: () => console.log('complete'),
    });
  }
}
