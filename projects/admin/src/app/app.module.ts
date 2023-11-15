import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderComponent } from './components/header/header.component';
import { AllQuestionsComponent } from './components/questions/all-questions/all-questions.component';
import { QuestionDetailsComponent } from './components/questions/question-details/question-details.component';
import { AddQuestionComponent } from './components/questions/add-question/add-question.component';
import { UpdateQuestionComponent } from './components/questions/update-question/update-question.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  MatRippleModule,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { DeleteQuestionComponent } from './components/questions/delete-question/delete-question.component';
import { AllBranchesComponent } from './components/branches/all-branches/all-branches.component';
import { AddBranchComponent } from './components/branches/add-branch/add-branch.component';
import { UpdateBranchComponent } from './components/branches/update-branch/update-branch.component';
import { DeleteBranchComponent } from './components/branches/delete-branch/delete-branch.component';
import { BranchDetailsComponent } from './components/branches/branch-details/branch-details.component';
import { AllReportsComponent } from './components/reports/all-reports/all-reports.component';
import { ReportDetailsComponent } from './components/reports/report-details/report-details.component';
import { DeleteReportComponent } from './components/reports/delete-report/delete-report.component';
import { AllDestinationsComponent } from './components/destinations/all-destinations/all-destinations.component';
import { AddDestinationComponent } from './components/destinations/add-destination/add-destination.component';
import { UpdateDestinationComponent } from './components/destinations/update-destination/update-destination.component';
import { DeleteDestinationComponent } from './components/destinations/delete-destination/delete-destination.component';
import { DestinationDetailsComponent } from './components/destinations/destination-details/destination-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AllQuestionsComponent,
    QuestionDetailsComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    DeleteQuestionComponent,
    AllBranchesComponent,
    AddBranchComponent,
    UpdateBranchComponent,
    DeleteBranchComponent,
    BranchDetailsComponent,
    AllReportsComponent,
    ReportDetailsComponent,
    DeleteReportComponent,
    AllDestinationsComponent,
    AddDestinationComponent,
    UpdateDestinationComponent,
    DeleteDestinationComponent,
    DestinationDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),

    MatAutocompleteModule,
    MatNativeDateModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
