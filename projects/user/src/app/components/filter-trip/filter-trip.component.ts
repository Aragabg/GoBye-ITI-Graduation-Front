import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBranch } from '../../models/ibranch';
import { BranchService } from '../../services/branch/branch.service';
import { DatePipe } from '@angular/common';
import { TripService } from '../../services/trip/trip.service';
import { Router } from '@angular/router';
import { IResponse } from '../../models/iresponse';
import { IFilterTrip } from '../../models/ifilter-trip';

@Component({
  selector: 'app-filter-trip',
  templateUrl: './filter-trip.component.html',
  styleUrls: ['./filter-trip.component.scss'],
})
export class FilterTripComponent {
  filterTripsForm: FormGroup;

  startBranches: IBranch[] = [];
  endBranches: IBranch[] = [];

  startBranchesIds: number[] = [];
  endBranchesIds: number[] = [];

  branchChanged: boolean = false;
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
      endBranchId: [14, [Validators.required]],
      quantity: [1, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.GetAllStartBranches();
    this.GetAllEndBranches();
  }

  changeStartBranch(selectStartBranch: any) {
    this.branchChanged = true;
    let branch = this.startBranches.find(
      (x) => x.id == selectStartBranch.value
    ) as IBranch;

    this.service.GetAllBranchesByDestinationId(branch.destinationId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        let startBranches: IBranch[] = response.data;
        this.startBranchesIds = startBranches.map((x) => x.id);
        console.log(this.startBranchesIds);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  changeEndBranch(selectEndBranch: any) {
    this.branchChanged = true;

    let branch = this.endBranches.find(
      (x) => x.id == selectEndBranch.value
    ) as IBranch;

    this.service.GetAllBranchesByDestinationId(branch.destinationId).subscribe({
      next: (v) => {
        let response = v as IResponse;
        let endBranches: IBranch[] = response.data;
        this.endBranchesIds = endBranches.map((x) => x.id);
        console.log(this.endBranchesIds);
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
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
      },
      // error: (e) => console.log(e),
      //complete: () => console.log('startBranches'),
    });
  }

  GetAllEndBranches() {
    this.service.GetAllEndBranches().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.endBranches = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('EndBranches'),
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
