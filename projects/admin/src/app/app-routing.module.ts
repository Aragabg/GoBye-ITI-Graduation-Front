import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuestionsComponent } from './components/questions/all-questions/all-questions.component';
import { AllBranchesComponent } from './components/branches/all-branches/all-branches.component';
import { AllReportsComponent } from './components/reports/all-reports/all-reports.component';
import { AllDestinationsComponent } from './components/destinations/all-destinations/all-destinations.component';

const routes: Routes = [
  { path: 'questions', component: AllQuestionsComponent },
  { path: 'branches', component: AllBranchesComponent },
  { path: 'reports', component: AllReportsComponent },
  { path: 'destinations', component: AllDestinationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
