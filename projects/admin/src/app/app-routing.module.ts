import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuestionsComponent } from './components/questions/all-questions/all-questions.component';
import { AllBranchesComponent } from './components/branches/all-branches/all-branches.component';
import { AllReportsComponent } from './components/reports/all-reports/all-reports.component';
import { AllDestinationsComponent } from './components/destinations/all-destinations/all-destinations.component';
import { AllPublicActivitiesComponent } from './components/publicActivities/all-public-activities/all-public-activities.component';
import { AllBusesComponent } from './components/bus/all-buses/all-buses.component';
import { AllBusClassesComponent } from './components/busClasses/all-bus-classes/all-bus-classes.component';
import { AllTripsComponent } from './components/trips/all-trips/all-trips.component';
import { AllReservationComponent } from './components/reservations/all-reservation/all-reservation.component';

const routes: Routes = [
  { path: 'questions', component: AllQuestionsComponent },
  { path: 'branches', component: AllBranchesComponent },
  { path: 'reports', component: AllReportsComponent },
  { path: 'destinations', component: AllDestinationsComponent },
  { path: 'activities', component: AllPublicActivitiesComponent },
  { path: 'buses', component: AllBusesComponent },
  { path: 'busClasses', component: AllBusClassesComponent },
  { path: 'trips', component: AllTripsComponent },
  { path: 'reservations', component: AllReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
