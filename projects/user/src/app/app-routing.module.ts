import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DestinationComponent } from './components/destination/destination.component';
import { BranchComponent } from './components/branch/branch.component';
import { PublicActivityComponent } from './components/public-activity/public-activity.component';
import { QuestionComponent } from './components/question/question.component';
import { ChooseTripComponent } from './components/choose-trip/choose-trip.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'questions', component: QuestionComponent },
  { path: 'reports', component: ContactUsComponent },
  { path: 'destinations', component: DestinationComponent },
  { path: 'destinations/:id', component: PublicActivityComponent },
  { path: 'branches', component: BranchComponent },
  { path: 'search/:departureDate/:startBranchId/:endBranchId/:quantity', component: ChooseTripComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
