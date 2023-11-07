import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DestinationComponent } from './components/destination/destination.component';
import { BranchComponent } from './components/branch/branch.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicActivityComponent } from './components/public-activity/public-activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './components/question/question.component';
import { DatePipe } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BusClassComponent } from './components/bus-class/bus-class.component';
import { ChooseTripComponent } from './components/choose-trip/choose-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactUsComponent,
    DestinationComponent,
    BranchComponent,
    RegisterComponent,
    LoginComponent,
    PublicActivityComponent,
    QuestionComponent,
    SpinnerComponent,
    BusClassComponent,
    ChooseTripComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
