import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  report: FormGroup;
  constructor() {
    this.report = new FormGroup({
      fullName:new FormControl(''),
      email:new FormControl(''),
      phoneNumber:new FormControl(''),
      reservationNumber:new FormControl(''),
      messageTitle:new FormControl(''),
      MessageContent:new FormControl(''),

    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
