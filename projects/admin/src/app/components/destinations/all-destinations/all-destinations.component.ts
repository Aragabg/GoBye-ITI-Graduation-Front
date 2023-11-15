import { Component, OnInit } from '@angular/core';
import { IDestinationRead } from '../../../models/destination/idestination-read';
import { DestinationService } from '../../../services/destination/destination.service';
import { MatDialog } from '@angular/material/dialog';
import { IResponse } from '../../../models/iresponse';
import { AddDestinationComponent } from '../add-destination/add-destination.component';

@Component({
  selector: 'app-all-destinations',
  templateUrl: './all-destinations.component.html',
  styleUrls: ['./all-destinations.component.scss'],
})
export class AllDestinationsComponent implements OnInit {
  destinations: IDestinationRead[] = [];

  constructor(
    private destinationService: DestinationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.GetAllDestinations();
  }

  FilterDestinations() {
    // if (userId.value == '0') {
    //   this.GetAllReports();
    //   console.log('all');
    // } else {
    //   this.GetAllReportsByUserId(userId.value);
    //   console.log('byUser');
    //   console.log(userId.value);
    // }
  }

  GetAllDestinations() {
    this.destinationService.GetAllDestinations().subscribe({
      next: (v) => {
        let response = v as IResponse;
        this.destinations = response.data;
      },
      // error: (e) => console.log(e),
      // complete: () => console.log('complete'),
    });
  }

  AddDestination() {
    const dialogRef = this.dialog.open(AddDestinationComponent, {
      width: '750px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.GetAllDestinations();
      }
    });
  }

  UpdateDestination(destination: IDestinationRead) {
    // const dialogRef = this.dialog.open(UpdateQuestionComponent, {
    //   width: '750px',
    //   data: question,
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.GetAllQuestions();
    //   }
    // });
  }

  DestinationDetails(destination: IDestinationRead) {
    // const dialogRef = this.dialog.open(QuestionDetailsComponent, {
    //   width: '750px',
    //   data: question,
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.GetAllQuestions();
    //   }
    // });
  }

  DeleteDestination(destinationId: number) {
    // const dialogRef = this.dialog.open(DeleteQuestionComponent, {
    //   width: '750px',
    //   data: questionId,
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.GetAllQuestions();
    //   }
    // });
  }
}
