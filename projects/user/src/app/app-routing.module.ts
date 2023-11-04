import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DestinationComponent } from './components/destination/destination.component';
import { BranchComponent } from './components/branch/branch.component';
import { PublicActivityComponent } from './components/public-activity/public-activity.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'reports', component: ContactUsComponent },
  { path: 'destinations', component: DestinationComponent },
  { path: 'destinations/:id', component: PublicActivityComponent },
  { path: 'branches', component: BranchComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
