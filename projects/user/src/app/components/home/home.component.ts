import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchService } from '../../services/branch/branch.service';
import { IResponse } from '../../models/iresponse';
import { IBranch } from '../../models/ibranch';
import { DatePipe } from '@angular/common';
import { IFilterTrip } from '../../models/ifilter-trip';
import { TripService } from '../../services/trip/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  filterTripsForm: FormGroup;

  startBranches: IBranch[] = [];
  endBranches: IBranch[] = [];

  startBranch: IBranch = {} as IBranch;
  endBranch: IBranch = {} as IBranch;

  newStartBranches: IBranch[] = [];
  newEndBranches: IBranch[] = [];
  today: string | null = '';
  constructor(
    private service: BranchService,
    private fb: FormBuilder,
    private dPipe: DatePipe,
    private tripService: TripService,
    private router: Router
  ) {
    this.today = dPipe.transform(new Date(), 'yyyy-MM-dd');

    this.filterTripsForm = fb.group({
      departureDate: [this.today, [Validators.required]],
      startBranchId: [1, [Validators.required]],
      endBranchId: [16, [Validators.required]],
      quantity: [1, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.GetAllStartBranches();
    this.GetAllEndBranches();
  }

  changeStartBranch(selectStartBranch: any) {
    this.startBranch = this.startBranches.find(
      (x) => x.id == selectStartBranch.value
    ) as IBranch;

    this.service
      .FilterEndBranchesByStartBranchDestinationIdAsync(
        this.startBranch.destinationId
      )
      .subscribe({
        next: (v) => {
          let response = v as IResponse;
          this.newEndBranches = response.data;
        },
        error: (e) => console.log(e),
        complete: () => console.log('complete'),
      });
  }

  changeEndBranch(selectEndBranch: any) {
    this.endBranch = this.endBranches.find(
      (x) => x.id == selectEndBranch.value
    ) as IBranch;

    this.service
      .FilterStartBranchesByEndBranchDestinationIdAsync(
        this.endBranch.destinationId
      )
      .subscribe({
        next: (v) => {
          let response = v as IResponse;
          this.newStartBranches = response.data;
        },
        error: (e) => console.log(e),
        complete: () => console.log('complete'),
      });
  }


  submit() {
    let filterTrip: IFilterTrip = this.filterTripsForm.value;
    this.router.navigate([
      '/search/',
      filterTrip.departureDate,
      filterTrip.startBranchId,
      filterTrip.endBranchId,
      filterTrip.quantity,
    ]);
  }

  GetAllStartBranches() {
    this.service.GetAllStartBranches().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.startBranches = response.data;
        this.newStartBranches = response.data;
      },
      error: (e) => console.log(e),
      //complete: () => console.log('startBranches'),
    });
  }

  GetAllEndBranches() {
    this.service.GetAllEndBranches().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.endBranches = response.data;
        this.newEndBranches = response.data;
      },
      error: (e) => console.log(e),
      complete: () => console.log('EndBranches'),
    });
  }

  get departureDate() {
    return this.filterTripsForm.get('departureDate');
  }
  get startBranchId() {
    return this.filterTripsForm.get('startBranchId');
  }
  get endBranchId() {
    return this.filterTripsForm.get('endBranchId');
  }
  get quantity() {
    return this.filterTripsForm.get('quantity');
  }
}
